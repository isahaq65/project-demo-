const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,

    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not an valid one!!!");
      }
    },
  },
  password: {
    type: String,
    minlength: 6,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    default: "student",
    lowercase: true,
    required: true
  },
  dept: {
    type: String,
    trim: true,
  },
  regNo: {
    type: String,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  images: [
    {
      image: {
        filename: String,
        url: String,
        imageDefinition:String,
      }
    }
  ],
  
});

/////// Instance Methods ////////

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject(); // converting mongoose document to plain js object
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT, {
    expiresIn: "12h",
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};


userSchema.methods.saveImages = async function (files) {
  const user = this;
  files.forEach(file => {
    const {filename,fieldname:imageDefinition} = file
    const image={
      filename,
      url:`http://localhost:${process.env.PORT}/` + filename,
      imageDefinition
    }
    user.images = user.images.concat({ image });
  });

  await user.save();
  // return token;
};


/////// Static Methods ////////

userSchema.statics.verifyCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");
  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");
  return user;
};


/////// Middleware ///////

userSchema.pre("save", async function () {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcryptjs.hash(user.password, 8);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
