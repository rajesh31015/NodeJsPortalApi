const Employee_todo = require("../model/employeeTodo.model");
const {Op} = require('sequelize');
const getNotes = async (request,response)=>{
    try{
        const user_id = request.params.user_id;
        const dataRes = await Employee_todo.findAll({
            where : {
                user_id : user_id
            }
        });
        response.status(200);
        response.json({
            data : dataRes
        });
    }catch(error){
        response.status(501);
        response.json({
            message : "Internal server error !",
            error : error
        });
    }
}

const createNotes = async (request,response)=>{
    try{
        const formData = request.body;
        const dataRes = await Employee_todo.create(formData);
        response.status(200);
        response.json({
            message : "Data created !",
            data : dataRes
        });
    }catch(error){
        response.status(501);
        response.json({
            message : "Internal server error !"
        });
    }
}

const updateNotes = async (request,response)=>{
    try{
        const id = request.params.id;
        const formdata = request.body;
        const dataRes = await Employee_todo.update(formdata,{
            where : {
                id : id
            }
        });
        response.status(200);
        response.json({
            message : "Data updated !",
            data : dataRes
        });
    }catch(error){
        response.status(501);
        response.json({
            message : "Internal srver error !",
            error : error
        });
    }
}

const deleteNotes = async (request,response)=>{
    try{
        const id = request.params.id;
        const dataRes = await Employee_todo.destroy({
            where : {
                id : id
            }
        });
        response.status(200);
        response.json({
            message : "Data deleted !",
            data : dataRes
        });
    }catch(error){
        response.status(501);
        response.json({
            message : "Internal Server error !",
            error : error
        });
    }
}

const searchData = async (request,response)=>{
    try{
        const {search} = request.body;
        const user_id = request.params.user_id;
        const dataRes = await Employee_todo.findAll({
            where : {
                user_id : user_id,
                [Op.or] :[
                    { title : {
                        [Op.like] : "%"+search+"%"
                    }},
                    {
                        description : {
                            [Op.like] : "%"+search+"%"
                        }
                    }
                ]
            }
        });
        response.status(200);
        response.json({
            data : dataRes,
        });
    }catch(error){
        response.status(501);
        response.json({
            message : "Internal server error !",
            error : error
        });
    }
}

module.exports = {
    getNotes,
    createNotes,
    updateNotes,
    deleteNotes,
    searchData
}