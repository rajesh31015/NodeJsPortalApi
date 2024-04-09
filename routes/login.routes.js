const express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller");

router.get("/",(request,response)=>{
    loginController.login(request,response);
});

module.exports = router;