const http = require("http");
const URL = process.argv[2];
http
  .get(URL, (response) => {
    response.setEncoding("utf-8");
    response.on("data", (chunk) => console.log(chunk));
    response.on("error", console.error);
  })
  .on("error", console.error);
