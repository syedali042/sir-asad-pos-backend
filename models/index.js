const mongoose = require('mongoose');
const UserModel = require('./Users');
const VendorModel = require('./Users');
mongoose.connect(`mongodb://localhost:27017`);
<<<<<<< HEAD

module.exports = {
  VendorModel,
  UserModel,
};
=======


module.exports = {
    VendorModel,
    UserModel
}
>>>>>>> 97837629df9eb1bbe299400bd6308b3c7fd555bb
