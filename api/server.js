const express = require("express");
const cohortsRouter = require("../routes/cohortsRouter");

const server = express();

server.use(express.json());
server.use("/api/cohorts", cohortsRouter);

server.get("/", (req, res) => {
  res.send("hi");
});

module.exports = server;
