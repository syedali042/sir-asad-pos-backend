const mongoose = require('mongoose');
const UserModel = require('./Users');

mongoose.connect(`mongodb+srv://salizahid:7Kr58c1PyHHl4Cca@cluster0.ehb1z.mongodb.net/event-organizer?retryWrites=true&w=majority`);


module.exports = {
    UserModel,
}