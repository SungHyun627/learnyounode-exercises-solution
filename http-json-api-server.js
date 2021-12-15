const http = require("http");
const url = require("url");

function routing(path, date) {
  if (path === "/api/parsetime") {
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  } else if (path === "/api/unixtime") {
    return { unixtime: date.getTime() };
  } else {
    return {};
  }
}

let server = http.createServer((req, res) => {
  if (req.method != "GET") return res.end("Not a GET request.\n");
  let parseUrl = url.parse(req.url, true);
  let date = new Date(parseUrl.query.iso);
  let resource = routing(parseUrl.pathname, date);
  if (resource) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(resource));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(process.argv[2]);
