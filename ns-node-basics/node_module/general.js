module.exports = function(dir_path, filtered_ext_name, callback){
        var fs = require('fs'), path = require('path'), file_arr = [], file_ext;
        fs.readdir(dir_path, function(err, file_names){
            if(err){
                return callback(err);
            }
            for(var i in file_names){
                file_ext = "";
                file_ext = path.extname(file_names[i]).substr(1);

                if(filtered_ext_name.localeCompare(file_ext)===0){
                    file_arr.push(file_names[i]);
                }
            }
            callback(null, file_arr);
        })
    }