const router = require("express").Router();
const auth = require('../middleware/auth')
const multer = require("multer");
const path = require("path");
const Application = require("../models/applicationModel")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "src/images");
    },
    filename: (req, file, cb) => {
      const name=req.user
      cb(null, Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage, fileFilter });


router.post("/submit",[auth,upload.any()], async (req, res) => {
    try {
        const user=req.user
        const files=req.files
        const {dicipline,school,nameExam,nameExamYear,recipientAddress,currentAddress,mobile,applicationType,session}=req.body
        const application= new Application({
            name:req.user.name,
            regNo:req.user.regNo,
            session,
            dicipline,
            school,
            applicationType,
            nameExam,
            nameExamYear,
            recipientAddress,
            currentAddress,
            mobile
        })
        application.saveImages(files)
        console.log(application)
        res.send({ result: "success" });
    } catch (e) {
        error = e.message;
        res.send({ error });
    }
});



module.exports = router;
