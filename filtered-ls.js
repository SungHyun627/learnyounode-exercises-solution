const fs = require("fs");
const path = require("path");
const extension = "." + process.argv[3];
fs.readdir(process.argv[2], (err, files) => {
  if (err) return console.log(err);
  files.forEach((file) => {
    if (path.extname(file) == extension) console.log(file);
  });
});
