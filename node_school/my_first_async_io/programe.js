/**
 * lines_in_file : Will contain total lines contain in a file.
 */
var fs = require('fs'), lines_in_file;

/**
 * This function will initiate NODE file system API to read spcified file
 * content.
 * 
 * @param Function callback
 * @returns None
 */
function trigger_read_line_api(callback) {
    /**
     * Node file system API function will start reading file conteent in an
     * asynchronus manner.
     */
    fs.readFile(process.argv[2], 'utf8', function (err, file_content) {
        if (err) {
            return err;
        }
        lines_in_file = file_content.split("\n").length-1;
        callback(); // Containing reference of "log_file_lines" function.
        
        return;
    });
}
/**
 * This function is used to log computed number of lines on console.
 * @returns None
 */
function log_file_lines() {
    console.log(lines_in_file);
}
/**
 * Call "trigger_read_line_api" function
 */
trigger_read_line_api(log_file_lines);