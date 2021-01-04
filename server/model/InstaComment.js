const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comments:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('Comment', commentSchema);