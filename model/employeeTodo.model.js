const { Sequelize, DataTypes, Model } = require('sequelize');
const dbConnect = require("../config/config");
const sequelize = dbConnect;
class Employee_todo extends Model {}

Employee_todo.init({
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    title : {
        type : DataTypes.STRING(255),
    },
    description : {
        type : DataTypes.TEXT,
    },
    user_id : {
        type : DataTypes.INTEGER(11),
    },
    priority_level : {
        type : DataTypes.STRING(255),
    }
},{
    // Other model options go here
    sequelize, // We need to pass the connection instance
    paranoid: true,
    modelName: 'Employee_todo' // We need to choose the model name
  });

  module.exports = Employee_todo;