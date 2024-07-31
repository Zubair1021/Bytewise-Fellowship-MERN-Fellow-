//We want to seprate all the routes 
const express = require("express")
const path =require("path")
const router = express.Router()
const blogs = require("../data/blogs.js")

router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,"../templates/index.html"))
})
router.get('/blog', (req,res) =>{
   console.log(blogs)
    // res.send(blogs) //This send all the data in the blogs.js file on the screen rather then HTML
    res.sendFile(path.join(__dirname,"../templates/blogs.html"))

})

  

module.exports=router