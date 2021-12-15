const fs = require("fs");

fs.readFile(process.argv[2], "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  number_of_newlines = data.toString().split("\n").length - 1;
  console.log(number_of_newlines);
});
