const User = require("../model/user.model");

const login = async (request,response)=>{
    try{
        const formData = {
            email : 'rajeshkumar@richestsoft.in',
            password : '12345'
        }
        if(formData.email)
        {
            const userData = await User.findOne({
                where : {
                    email : formData.email
                }
            });
            if(userData === null)
            {
                response.status(404);
                response.json({
                    message : 'User not found !'
                });
            }
            else
            {
                response.json({
                    data : userData.password
                })
            }
        }
    }catch(error){
        response.status(501);
        response.json({
            message : "Internal server error !",
            error : error
        });
    }
}

module.exports = {
    login
}