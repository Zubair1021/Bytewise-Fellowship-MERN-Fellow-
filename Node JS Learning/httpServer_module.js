//------------Building a HTTP Server 

//Status Code is avaliable online and set according to the requirement.

const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.httpVersion);  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(req.url === '/'){
    res.statusCode = 200;
    res.end('<h1>HTTP Server Developed By Zubair</h1> <p>' +
             'This is the practice of <strong>Node Js</strong> backand web development.' +
      '</p>'+
         '<img src="https://miro.medium.com/v2/resize:fit:700/1*f40mVY_hJvyhvm47bd0qyg.png" alt="Server Picture"></img>');
  }
  else if(req.url === '/about'){
    res.statusCode = 200;
  res.end('<h1>About HTTP Server Developed By Zubair</h1> <p>' +
             'This is the practice of <strong>Node Js</strong> backand web development.' +
      '</p>');
  }

  else{
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1> <p>' +
             'The page you are looking for is not available.This is the <strong>server issue</strong>.' +
      '</p>');
  }

  
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}
);
