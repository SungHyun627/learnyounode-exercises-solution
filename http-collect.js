const http = require("http");
const URL = process.argv[2];
http.get(URL, (response) => {
  response.setEncoding("utf-8");
  let result = "";
  response.on("data", (chunk) => (result += chunk));
  response.on("end", () => {
    console.log(result.length);
    console.log(result);
  });
});
