const URL = require("url");
const HTTP = require("http");
const MOMENT = require("moment");
const PARSETIME_ENDPOINT = '/api/parsetime';
const UNIXTIME_ENDPOINT = '/api/unixtime';

function trigger_fun(portNumber, Url){
    
    var httpServer;
    var reqUrl;
    var timeObj;

    httpServer = HTTP.createServer();
    httpServer.listen(portNumber);
    httpServer.on("request", function(req, res){
        timeObj = {};
        reqUrl = URL.parse(req.url, true);
        if(PARSETIME_ENDPOINT.localeCompare(reqUrl.pathname) === 0){
        timeObj = {"hour":MOMENT(reqUrl.query.iso).hours(),
                    "minute":MOMENT(reqUrl.query.iso).minutes(),
                    "second":MOMENT(reqUrl.query.iso).seconds()
                };
        }        
        if(UNIXTIME_ENDPOINT.localeCompare(reqUrl.pathname) === 0){
        timeObj = {"unixtime":MOMENT(reqUrl.query.iso).valueOf()};
        }

        res.writeHead("200", {"Content-Type":"application/json"});
        res.write(JSON.stringify(timeObj));
        res.end();
    });
}
trigger_fun(process.argv[2], process.argv[3]);