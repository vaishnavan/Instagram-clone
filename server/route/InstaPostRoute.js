const express = require('express');
const InstaPost = require('../model/InstagramPost');
const router = express.Router();

router.post('/instaPost', async (req,res) => {
    const post = new InstaPost({
        profileName:req.body.profileName,
        profileImg:req.body.profileImg,
        postImg: req.body.postImg,
        status: req.body.status,
    })
    await post.save()
    .then((data)=>{
        res.json(data);
    });
});

router.get('/allInstaPost', async (req, res) => {
        await InstaPost.find()
        .then((data)=>{
            res.json(data);
        });
});

module.exports = router;