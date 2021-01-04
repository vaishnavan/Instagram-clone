const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//router
app.use('/api', require('./route/commentRoute'));
app.use('/api', require('./route/InstaPostRoute'));

app.listen(('5000'),()=>{
    console.log('server conncted');
});

mongoose.connect('mongodb://localhost:27017/InstagramDB', {useNewUrlParser:true, useUnifiedTopology:true}, (err) =>{
    if(!err){
        console.log('database connected');
    }else{
        console.log(err);
    }
});