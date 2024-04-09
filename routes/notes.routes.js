const { response } = require("express");
const express = require("express");
const router = express.Router();
const notesController = require("../controller/notes.controller");

router.get("/:user_id",(request,response)=>{
    notesController.getNotes(request,response);
});

router.get("/search/:user_id",(request,response)=>{
    notesController.searchData(request,response);
});

router.post("/",(request,response)=>{
    notesController.createNotes(request,response);
});

router.put("/:id",(request,response)=>{
    notesController.updateNotes(request,response);
});

router.delete("/:id",(request,response)=>{
    notesController.deleteNotes(request,response);
});

module.exports = router;