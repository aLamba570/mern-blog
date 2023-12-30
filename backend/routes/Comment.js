const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')
const Post = require('../models/Post')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// Create a comment

router.post('/write', async (req, res) =>{
    try{
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    }
    catch(err){
        res.status(500).json(err);
    }
})

// Update a comment

router.put('/:id', async(req, res)=>{
    try{
        const updateComment = await Comment.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        res.status(200).json(updateComment);
    }
    catch(err){
        res.status(500).json(err);
    }
})

// Delete a comment

router.delete('/:id', async (req, res)=>{
    try{
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Comment deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
})


//get post comments

router.get('/post/:postId', async (req, res)=>{
    try{
        const comments = await Comment.find({postId:req.params.postId});
        res.status(200).json(comments);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;