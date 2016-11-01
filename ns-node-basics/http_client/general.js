var http = require("http");

http.get(process.argv[2], function(res){
    res.on("data", function(data){
        console.log(data.toString("utf8"));
    });
    res.on("error", function(data){
        console.log(data);
    });
});