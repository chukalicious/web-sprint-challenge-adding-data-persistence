// build your server here
const express = require("express");

const server = express();

//require routers here
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");
// import other routers

server.use(express.json());

//use your routers below
server.use(`api/project`, projectRouter);
server.use(`api/resource`, resourceRouter);
server.use(`api/task`, taskRouter);
//other router
//another router

//export server to index.js
module.exports = server;
