const mongoose = require('mongoose');
const UserModel = require('./Users');
const VendorModel = require('./Users');
mongoose.connect(`mongodb://localhost:27017`);

module.exports = {
  VendorModel,
  UserModel,
};
