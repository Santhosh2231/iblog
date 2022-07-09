import { Router } from 'express';
import { getBlogs, createBlog } from "../controllers/blog.js";

// ,updatePost,deletePost,likePost

const router = Router();

router.get("/",getBlogs);
router.post("/",createBlog);

export default router;