import express from "express";
import * as dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";
import Post from "../mongodb/models/post.js";

dotenv.config()

const router = express.Router()

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

//Routes

//Get all posts
router.route('/').get(async(req, res) =>{
        try{
            const post = await Post.find({})
            // console.log(post)
            res.status(200).json({success:true, data:post})
        }catch(error){
            res.status(500).json({success:false, message:error})
            

        }
})
//Create a post
router.route('/').post(async(req, res) =>{
    try{
        const{name,prompt, photo} = req.body;
        // console.log(name, prompt, photo)
        // const photourl = await cloudinary.uploader.upload(photo);
        console.log(photo)
        const newPost = await Post.create({
            name, 
            prompt,
            photo: photo // or photourl.url, depending on whether you want to use HTTPS or HTTP.
        });
        

        res.status(201).json({success:true,data:newPost})
        
    }catch(err){
        res.status(500).json({success:false, error:err})
    }

})

export default router;
