const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('../verifyToken');


// Create a post

router.post('/write', verifyToken, async (req, res) => {
    try{
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){
        res.status(500).json(err);
    }
})



// Update a post

router.put('/:id', verifyToken, async (req, res) => {
    try{
        const updatePost = await Post.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        res.status(200).json(updatePost)
    }
    catch(err){
        res.status(500).json(err);
    }
})


// Delete a post

router.delete("/:id", verifyToken, async (req, res) => {
    try {
        // Delete posts associated with the user
        
        await Post.deleteMany({ userId: req.params.id });

        // Respond with a success message
        res.status(200).json("Post deleted");
    } catch (err) {
        // Handle errors and respond with an error status
        res.status(500).json(err);
    }
});


//get a post details

router.get('/:id', async (req, res) =>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err);
    }   
})


//get all posts

router.get("/",async (req,res)=>{
    const query=req.query
    
    try{
        const searchFilter={
            title:{$regex:query.search, $options:"i"}
        }
        const posts=await Post.find(query.search?searchFilter:null)
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})


//get posts of user

router.get('/user/:userId', async (req, res) =>{
    try{
        const posts = await Post.find({userId:req.params.userId});
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json(err);
    }   
})


module.exports = router;

