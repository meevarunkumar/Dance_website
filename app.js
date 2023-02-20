const { urlencoded } = require("express");
const express=require("express")
const fs = require('fs')
const path= require("path")
const app = express()
const port=3000;

app.use(express.static('static'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(urlencoded())


app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{

    res.render('about')
})
app.get("/services",(req,res)=>{

    res.render('services')
})
app.get("/contact",(req,res)=>{
    
    res.render('contact')
})
app.post("/submit",(req,res)=>{
    console.log(req.body.name);
  
    console.log(req.body.email);
    res.render('submit' ,{name:req.body.name})
})

app.listen(port,()=>{
    console.log(`server started at $(port)`);
})
