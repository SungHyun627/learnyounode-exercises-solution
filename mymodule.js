const fs = require("fs");
const path = require("path");

module.exports = (dirName, ext, callback) => {
  fs.readdir(dirName, (err, files) => {
    if (err) return callback(err);
    files = files.filter((file) => path.extname(file) === "." + ext);
    callback(null, files);
  });
};
