import React,{useEffect} from 'react'
import {useDispatch} from "react-redux";

const Blog = () => {

  const dispatch = useDispatch();
  useEffect(()=>{

    dispatch()
  })


  return (
    <div>Blog</div>
  )
}

export default Blog