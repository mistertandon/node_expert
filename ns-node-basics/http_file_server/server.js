var http_module = require("./module.js");

function trigger_fun(listenPort, filePath){
    http_module(listenPort, filePath)
}

trigger_fun(3000, "files/demo_1.js");