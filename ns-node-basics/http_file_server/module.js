module.exports = function(listenPort, filePath){
    const http = require("http");
    var http_server = http.createServer(function(request, response){
        response.writeHead(200, {"Content-Type":"text/html"})
        response.end('okay');
    });
    console.log(http_server);
    http_server.listen(3000);
    http_server.on("request", function(request, response){
        console.log(request);
        console.log(response);
    });
}