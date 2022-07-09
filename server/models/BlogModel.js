import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = Schema({
    author: {type:String},
    title: {type: String},
    description: {type: String},
    tags: {type: [String]},
    content: {type: String},
    likeCount :{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        deafult: new Date()
    }
});

const BlogModel = mongoose.model('Blog',blogSchema);
export default BlogModel;