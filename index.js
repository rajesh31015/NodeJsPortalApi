const express = require("express");
const server = express();
server.listen(8080);

//predefined middlware
const bodyParser = require("./middlware/bodyParser.middleware");
const multer = require("./middlware/multer.middlware");

server.use(bodyParser.urlEncoded);
server.use(bodyParser.urlJson);
server.use(multer);

// routes
const loginRoutes = require("./routes/login.routes");
const notesRoutes = require("./routes/notes.routes");

//user defined middlware
server.use("/",loginRoutes);
server.use("/api/notes",notesRoutes);