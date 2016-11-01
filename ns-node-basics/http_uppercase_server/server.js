var streamMod = require("./module.js");

function call_or_execute(portNumber, filePath){
    streamMod(portNumber, filePath);
}
call_or_execute(process.argv[2], process.argv[3]);