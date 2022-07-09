import mongoose from "mongoose";
import BlogModel from "../models/BlogModel.js";


export const getBlogs = async (req,res)=>{
    try {
        const Blogs = await BlogModel.find();
        res.status(200).json(Blogs);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createBlog = async (req,res)=>{
    
    const blog = req.body;
    const newBlog = new BlogModel({...blog,createdAt: new Date().toISOString()})
    
    try {
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}