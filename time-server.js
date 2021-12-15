const net = require("net");

const fillWithZero = (num) => {
  return (num >= 10 ? "" : "0") + num;
};
const calcCurrentDate = () => {
  let currentDate = new Date();
  return (
    currentDate.getFullYear() +
    "-" +
    fillWithZero(currentDate.getMonth() + 1) +
    "-" +
    fillWithZero(currentDate.getDate()) +
    " " +
    fillWithZero(currentDate.getHours()) +
    ":" +
    fillWithZero(currentDate.getMinutes())
  );
};

const server = net.createServer((socket) => {
  socket.end(calcCurrentDate() + "\n");
});
server.listen(Number(process.argv[2]));
