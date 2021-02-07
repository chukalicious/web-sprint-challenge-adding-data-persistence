// build your server here
const express = require("express");

const server = express();

//require routers here
const Router = require("./path-to-router");
// import other routers

server.use(express.json());

//use your routers below
server.use(`api/path/to/endpoint`, Router);
//other router
//another router

//export server to index.js
module.exports = server;
