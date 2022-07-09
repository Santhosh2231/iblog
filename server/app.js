import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";



import blogRoutes from "./routes/blogRoutes.js";



const app = express();
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({extended: true}));




app.use("/blogs",blogRoutes);
const PORT = 5000;
mongoose.connect("mongodb://localhost:27017/iblog",{useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=>{
        console.log(`server listening at ${PORT}`);
    }) )
    .catch((error)=>{
        console.log(error.message)
    } );