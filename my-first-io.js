const fs = require("fs");

files_contents = fs.readFileSync(process.argv[2]);
number_of_newlines = files_contents.toString().split("\n").length - 1;
console.log(number_of_newlines);
