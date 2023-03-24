const express = require('express')
require('dotenv').config()

//express app 
const app = express()

//middleware
app.use((req,res,next)=>{
    console.log(req.method,req.path)
    next()
})

app.get('/',(req,res)=>{
    res.json({message:"working"})
})

app.listen(process.env.PORT, () =>
    console.log("server is connected",process.env.PORT))