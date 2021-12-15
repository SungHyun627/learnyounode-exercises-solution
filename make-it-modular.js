const mymodule = require("./mymodule.js");
const dirName = process.argv[2];
const extension = process.argv[3];

mymodule(dirName, extension, (err, files) => {
  if (err) return console.log("error occurs");
  files.forEach((file) => console.log(file));
});
