const {Sequelize, Model, DataTypes} = require("sequelize");

let dbConfig = {
    db_name : 'portal_node_js',
    db_user : 'root',
    db_password : "",
    con_type : 'mysql',
    port : '3306',
    host : 'localhost'
}

const dbConnect = new Sequelize(dbConfig.db_name,dbConfig.db_user,dbConfig.db_password,{
    host : dbConfig.host,
    dialect : dbConfig.con_type,
    port : dbConfig.port
});

module.exports = dbConnect;