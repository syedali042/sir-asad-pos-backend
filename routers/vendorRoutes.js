const route = require('express').Router();
const vendorController = require('../controllers/vendorController');
const path =  require('path')
const multer = require('multer');
const UPLOAD_FILES_DIR = "./uploads/user-profiles";
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, UPLOAD_FILES_DIR);
  },
// in case you want to change the names of your files)
  filename(req, file = {}, cb) {
    file.mimetype = "audio/webm";
    // console.log(req)
    const {originalname} = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null, `${Date.now()}${fileExtension}`);
  }
});
const upload = multer({storage});
route.post('/vendorRegister', vendorController.vendorRegister);
route.post('/loginVendor', vendorController.loginVendor);
route.post('/update', vendorController.update);
route.put('/profilePicture', upload.single('files'), vendorController.profilePicture);

module.exports = route;