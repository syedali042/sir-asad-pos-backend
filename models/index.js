const mongoose = require('mongoose');
const UserModel = require('./Users');

mongoose.connect(`mongodb://localhost:27017`);


module.exports = {
    UserModel,
}