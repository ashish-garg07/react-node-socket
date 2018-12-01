const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = "4001";
const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", socket => {
  console.log("New Client Connected");

  socket.on("change color", color => {
    console.log("Color changed to: ", color);
    io.sockets.emit("change color", color);
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log(`Lising on port ${port}`);
});
