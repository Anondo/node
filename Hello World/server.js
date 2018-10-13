var http = require('http');

function onRequest(request , response)
{
  //create the http header
  response.writeHead(200 , {'Content-Type' : 'text/plain'}) //response.writeHead(status_code , headers)

  //create the response body
  response.write("Hello World");

  //send the response
  response.end();


}

//create the server
http.createServer(onRequest).listen(8008);

console.log("Server running...")
