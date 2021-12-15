const http = require("http");
let results = [];
let count = 0;
function httpGet(num) {
  http.get(process.argv[num + 2], (response) => {
    let result = "";
    response.setEncoding("utf-8");
    response.on("data", (data) => (result += data));
    response.on("end", () => {
      results[num] = result;
      count += 1;
      if (count == 3) results.forEach((result) => console.log(result));
    });
  });
}

for (i = 0; i < 3; i++) {
  httpGet(i);
}
