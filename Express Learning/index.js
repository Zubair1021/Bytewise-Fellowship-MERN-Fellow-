//Express JS Server 
//In node their are lot of if statements but express server not and also do some automative works...
//Easier way to create a server

//_______________________Middleware
// Middleware is a request handler that allows you to intercept and manipulate requests and responses before they reach route handlers. They are the functions that are invoked by the Express. js routing layer

//___________________Nodemon
// if node is not working after installation Run this command and then use it "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser"

const express = require('express')
const path = require('path')
const app = express()
const port = 3000


//Userdefine Middleware

const MyMiddleware = (req, res, next) => {
  console.log('I am a middleware')
  next()  //function is used to pass control to the next middleware function in the stack.
}



//Serving a Static folder (Built-in Middleware)
app.use(express.static(path.join(__dirname, 'public')))    //__dirname is Variable but the public(Served folder) not.
//Calling userdefine middleware
// app.use(MyMiddleware)



app.get('/', (req, res) => {
  res.send('Welcome to Express Server')
})

//This text is displayed on /about...
  app.get('/about', (req, res) => {
    res.send('Welcome to Express Server About page.....')  
})

//From this we display different html file data
app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname,"index.html")) 
})

//Sending Jason
app.get('/jason', (req, res) => {
  res.json({message: "Welcome to Express Server" , status: 200, Server_Developer:"Muhammad Zubair"})
})

//Passing Parameters
app.get('/hello/:name', (req, res) => {
  res.send('Heloooo!.....'+req.params.name)  
})




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})