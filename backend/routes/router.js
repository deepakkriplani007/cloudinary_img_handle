const express = require("express");
const router = new express.Router();
const multer = require("multer");
const cloudinary = require("../helper/cloudinaryconfig");
const moment = require("moment");
const users = require("../model/userSchema");
const fs= require("fs");
// img storage path
const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
});

// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allow"))
    }
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})


// user register
router.post("/register",upload.single("photo"),async(req,res)=>{
    //  console.log(req.file);
    let upload;
    try {
    upload  = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path);
   } catch (error) {
    res.status(450).json("pikachu");
   }
    // console.log(upload.public_id);
    
    const {name} = req.body;
    
    try {
        const date = moment(new Date()).format("YYYY-MM-DD");
        
        const userdata = new users({
            name:name,
            imgpath:upload.secure_url,
            imgid:upload.public_id,
            date:date
        });
        console.log(userdata)
console.log("pikachu")
        await userdata.save();
        res.status(200).json(userdata);
    } catch (error) {

        res.status(400).json(error)
    }
});



// user data get
router.get("/getdata",async(req,res)=>{
    try {
        const getUser = await users.find();
        res.status(200).json(getUser);

    } catch (error) {
        res.status(400).json(error)
        
    }
})
router.delete('/delete/:id', async (req, res) => {
    const imgid = req.params.id;
    console.log(imgid);
    try {
      await cloudinary.uploader.destroy(imgid);
      await users.deleteOne({ imgid: imgid });
      res.status(200).json({ message: 'Successfully deleted' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });
router.post('/update/:id', async (req, res) => {
    const imgid = req.params.id;
    console.log(imgid);
    console.log(req.body);
    try { 
        console.log('pi1')
        const user = await users.findOne({ imgid:imgid });
      console.log('pi2')
    //   console.log('pi1')
      console.log(user);
      user.name = req.body.name;
      await user.save();
      res.status(200).json({ user: user, status: 'success' });
    } catch (error) {
        console.log('pikachu')
      res.status(error.statusCode).json({ error: error.message });
    }
});

module.exports = router;