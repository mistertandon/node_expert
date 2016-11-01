var fs = require('fs');
/**
 * fileLines : Contains number of lines contain into text file.
 */
var fileLines = fs.readFileSync(process.argv[2], 'utf8').split("\n").length-1;
/**
 * Brief explaination about above used syntax
 * 
 * fs.readFileSync : Will return content of file as string having utf8 format,
 * split           : Will split string using separator as "New Line",
 * length          : Will return length of the array
 */
console.log(fileLines);