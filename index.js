const express = require('express');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;



app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get("/twitter",(req,res)=>{
    res.send("abhinavanand")
})

app.get("/login",(req,res)=>{
    res.send("<h1>Please login at TECH.</h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>TECH</h2>")
})

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`);
})