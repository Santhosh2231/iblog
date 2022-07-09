import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {createBlog} from "../../actions/blogs";


const Form = ()=>{

    const dispatch = useDispatch()

    const [newBlog,setNewBlog] = useState({
        author: "",
        title: "",
        description: "",
        tags: [],
        content: ""
    })


    const createPost = (e)=>{
        e.preventDefault();
        console.log(newBlog);
        dispatch(createBlog({...newBlog,author:"Santhosh"}));
        
    }


    return (
        <div>
            <h1>Create a post</h1>
            <form onSubmit={createPost} >
                <input type="text" name="title" placeholder="Enter the Title" value={newBlog.title} onChange={(e)=>setNewBlog({...newBlog,title:e.target.value})}/> <br/>
                <textarea name="description" placeholder="Description" rows={6} cols={50} value={newBlog.description} onChange={(e)=>setNewBlog({...newBlog,description:e.target.value})}/> <br />
                <input type="text" name="tags" placeholder="Tags" value={newBlog.tags} onChange={(e)=>setNewBlog({...newBlog,tags:e.target.value.split(",")})} /> <br />
                <textarea name="content" placeholder="content" rows={12} cols={50} value={newBlog.content} onChange={(e)=>setNewBlog({...newBlog,content:e.target.value})} /><br />
                <input type="Submit"  defaultValue="create a blog"/>
            </form>
        </div>
    )
}
export default Form;