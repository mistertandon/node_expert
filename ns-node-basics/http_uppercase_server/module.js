module.exports = function http_stream_process(portNumber, filePath){
                    
                    const HTTP = require("http");
                    var httpServer;
                    var reqData = '';
                    
                    httpServer = HTTP.createServer();
                    httpServer.listen(portNumber,'localhost');
                    httpServer.on("request", function(req, res){
                        
                        req.on("data", function(chunk){
                            reqData += chunk.toString("utf-8").toUpperCase();
                        });
                        req.on("end", function(){
                            res.write(reqData);
                        });
                    });
}