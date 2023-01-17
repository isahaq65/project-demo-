const mongoose = require("mongoose");


const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  dept: {
    type: String,
    trim: true,
  },
  session:String,
  regNo: {
    type: String,
    trim: true,
  },
  images: [
    {
      image: {
        filename: String,
        url: String,
        imageDefinition:String,
      }
    }
  ],
  decipline:String,
  school:String,
  
  applicationType:String,
  recipientAddress:String,
  currentAddress:String,
  mobile:String,
  nameExam:String,
  nameExamYear:String,

  deptApproval:{
    type:Boolean,
    default:false
  },
  controllerApproval:{
    type:Boolean,
    default:false
  }
  
});

applicationSchema.methods.saveImages = async function (files) {
    const application = this;
    files.forEach(file => {
      const {filename,fieldname:imageDefinition} = file
      const image={
        filename,
        url:`http://localhost:${process.env.PORT}/` + filename,
        imageDefinition
      }
    //   console.log(image)
      application.images = application.images.concat({ image });
    });
  
    // await application.save();
    // return token;
  };
  


const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
