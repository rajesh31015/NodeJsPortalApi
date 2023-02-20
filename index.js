const express = require("express");
const server = express();
server.listen(8080);

// routes
const loginRoute = require("./routes/login.routes");

//user defined middlware
server.use("/",loginRoute);