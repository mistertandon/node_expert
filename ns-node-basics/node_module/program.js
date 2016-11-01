/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var file_info = require("./general.js");

function trigger_file_reading(callback) {
    file_info(process.argv[2], process.argv[3], callback);
}
function display_lines(err_msg, file_names) {
    if (err_msg) {
        console.log(err_msg);
    } else {
        for (var i in file_names) {
            console.log(file_names[i]);
        }
    }
}
trigger_file_reading(display_lines);

