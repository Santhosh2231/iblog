import React from "react";
import * as api from "../api";
// import { applyMiddleware } from "redux";


export const fetchBlogs = ()=>async (dispatch)=>{
    try{
        const {data} = await api.fetchBlogs();
        dispatch({
            type: "FETCH_ALL",
        })

    }catch(err){
        console.log(err);
    }
}

export const createBlog = (blog)=>async (dispatch)=>{
    try {
        const {data} = await api.createBlog(blog);
        dispatch({
            type: "CREATE",
            payload: data
        })
    } catch (err) {
        console.log(err);
    }
}