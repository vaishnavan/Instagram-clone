const mongoose = require('mongoose');

const instaSchema = new mongoose.Schema({
    profileName:{
        type:String,
        required:true,
    },
    profileImg:{
        type:String,
        required:true,
    },
    postImg:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    postDate:{
        type:Date,
        default:Date.now(),
    }
})

module.exports = mongoose.model('InstaPost', instaSchema);