const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({

    name : String,
    email : String,
    id : Number,
    contact : String,
    isActive : {
        type : Boolean,
        default : false,   
    },
    isDeleted : {
        type: Boolean,
        default:false,
    },
    createdAt: {    
        type: Date,
        default: Date.now()
    },
    updatedAt: {    
        type: Date,
        default: Date.now()
    }, 

})

module.exports = mongoose.model('Vendor', vendorSchema)