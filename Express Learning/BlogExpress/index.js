const express = require("express");
const path = require("path"); 
const app = express();
const port = 3000;



const MyMiddleware = (req, res, next) => {
  console.log('I am a middleware')
  next() 
}


// app.use(express.static(path.join(__dirname, 'public')))  

app.use('/', require(path.join(__dirname,"routes/blog"))) 




  // We seprates over routes like this

// app.use(MyMiddleware)



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })