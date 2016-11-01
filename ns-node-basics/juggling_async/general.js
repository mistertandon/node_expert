/**
 * http : Will contain node http module object,
 * bl   : Will contain buffer-list module object,
 * stream : Will contain stream module object
 * 
 */
var http = require("http"), bl = require("bl"), stream = require("stream");

http.get(process.argv[2], function(response){
//    console.log(process.argv[2], process.argv[3], process.argv[4]);
    /**
     * response.pipe() : Will pull out all data from response and will store into buffer-list object.
     */
    response.pipe(bl(function(err, data){
        console.log(data.toString("utf8"));
   //===============
http.get(process.argv[3], function(response){
//    console.log(process.argv[2], process.argv[3], process.argv[4]);
    /**
     * response.pipe() : Will pull out all data from response and will store into buffer-list object.
     */
    response.pipe(bl(function(err, data){
        console.log(data.toString("utf8"));
//======   
http.get(process.argv[4], function(response){
//    console.log(process.argv[2], process.argv[3], process.argv[4]);
    /**
     * response.pipe() : Will pull out all data from response and will store into buffer-list object.
     */
    response.pipe(bl(function(err, data){
        console.log(data.toString("utf8"));
        
        
        
    }));
});     
//=========        
        
    }));
});
        
   //===============     
        
        
    }));
});