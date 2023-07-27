const http = require("node:http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (__, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/ping", (__, res) => {
  return res.send("pong");
});

io.on("connection", (socket) => {
  socket.emit("chatMessage", "Welcome to Chat");
  socket.broadcast.emit("chatMessage", "New user connected to Chat");

  socket.on("chatMessage", (message) => {
    const data = JSON.parse(message);

    socket.emit("chatMessage", `You: ${data.message}`);
    socket.broadcast.emit("chatMessage", `${data.name}: ${data.message}`);
  });
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
