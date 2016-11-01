const NET = require("net"), STRFTIME = require("strftime");

const SERVER = NET.createServer(function(connetionListener){
    connetionListener.end(STRFTIME("%Y-%m-%d %H:%M")+"\n");
});
SERVER.listen(process.argv[2]);