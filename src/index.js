const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.status(200).send("hello world");
})

app.listen(5000, ()=>{
    console.log("The server is working on port number 5000")
})