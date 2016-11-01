var fs = require("fs"), path = require("path");
var d_file_ext = "php", temp_ext = "";

fs.readdir("text_files/", function (err, files_name_arr) {
    for (var i in files_name_arr) {
        temp_ext = path.extname(files_name_arr[i]).toLowerCase().substring(1);
        if (d_file_ext.localeCompare(temp_ext) === 0) {
            console.log(files_name_arr[i]);
        }

    }
});