const express = require('express');
const Comment = require('../model/InstaComment');
const router = express.Router();

router.post('/commentPost', async(req, res) => {
    const comment = new Comment({
        comments:req.body.comments,
    })
    await comment.save()
    .then((data)=>{
        res.json(data);
    });
});

router.get('/allcomments', async (req, res) => {
    await Comment.find()
    .then((data)=>{
        res.json(data);
    });
});

module.exports = router;

