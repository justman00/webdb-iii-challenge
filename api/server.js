const express = require("express");
const cohortsRouter = require("../routes/cohortsRouter");
const studentRouter = require("../routes/studentRouter");

const server = express();

server.use(express.json());
server.use("/api/cohorts", cohortsRouter);
server.use("/api/students", studentRouter);

server.get("/", (req, res) => {
  res.send("hi");
});

module.exports = server;
