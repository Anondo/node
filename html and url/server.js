var http = require('http');
var port = 8084


http.createServer((request , response) => {

  if(request.url == "/home" || request.url == "/")
  {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1>This is the home page dummy</h1>");
    console.log(new Date() + " " + request.method + " " + 200 + " http://127.0.0.1:" + port + request.url);
  }

  else if(request.url == "/about")
  {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1>This is the about page dummy</h1>");
    console.log(new Date() + " " + request.method + " " + 200 + " http://127.0.0.1:" + port + request.url);
  }

  else if(request.url == "/contact")
  {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1>This is the contact page dummy</h1>");
    console.log(new Date() + " " + request.method + " " + 200 + " http://127.0.0.1:" + port + request.url);
  }
  else
  {
    response.writeHead(404 , {'Content-Type': 'text/plain'})
    response.write("Error 404: content not found!");
    console.log(new Date() + " " + request.method + " " + 404 + " http://127.0.0.1:" + port + request.url);
  }




  response.end();
}).listen(port);

console.log("Server running at http://127.0.0.1:" + port + ".....");
