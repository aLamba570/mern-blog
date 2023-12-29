const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Post = require('../models/Post')
const Comment = require('../models/Comment')


//update user

router.put("/:id", async (req, res) =>{
    try{
        if(req.body.password){
            const salt = await bycrypt.genSalt(10);
            req.body.password = await bycrypt.hashSync(req.body.password, salt);
        }
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{new:true});
        res.status(200).json(updateUser);
    }
    catch(err){
        res.status(500).json(err);
    }

})


//delete user

router.delete("/:id", async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        await Post.deleteMany({userId: req.params.id});
        await Comment.deleteMany({userId: req.params.id});
        res.status(200).json("User deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
})


//get a user

router.get("/:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...info} = user._doc;
        res.status(200).json(info);
    }
    catch(err){
        res.status(500).json(err);
    }
})

modules.exports = router;