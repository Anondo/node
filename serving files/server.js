var http = require('http');
var fs = require('fs');
var port = 8008;

http.createServer((request , response) => {

  if(request.method == 'GET' && request.url == '/')
  {
    response.writeHead(200 , {'Content-Type' : 'text/html'});

    //read from the html file and place it in the response
    fs.createReadStream("./index.html").pipe(response);

    logResponseMessage(request.method , 200 , request.url);
  }
  else
  {
    send404(response);
    logResponseMessage(request.method , 404 , request.url);
  }

}).listen(port);

console.log("Node Server Running at http://127.0.0.1:" + port + ".....");


function send404(response)
{
  response.writeHead(404 , {'Content-Type' : "text/plain"});
  response.write('Error 404: content not found');
  response.end();
}
function logResponseMessage(method , status_code , url)
{
  console.log(new Date() + " " + method + " " + status_code + " http://127.0.0.1:" + port + url);
}
