import axios from "axios";


const API = axios.create({baseURL: "http://localhost:5000/"});

export const fetchBlogs = ()=> API.get("/blogs");
export const createBlog = (newBlog)=> API.post("/blogs",newBlog);