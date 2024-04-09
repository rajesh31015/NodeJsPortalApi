const { Sequelize, DataTypes, Model } = require('sequelize');
const dbConnect = require("../config/config");
const sequelize = dbConnect;
class User extends Model {}

User.init({
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    first_name : {
        type : DataTypes.STRING(255)
    },
    last_name : {
        type : DataTypes.STRING(255)
    },
    email : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    personal_email : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    phone : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    profile_image : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    cover_image : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    address : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    latitude : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    longitude : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    city : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    state : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    pincode : {
        type : DataTypes.INTEGER(11),
        allowNull : true
    },
    age : {
        type : DataTypes.INTEGER(11),
        allowNull : true
    },
    role_id : {
        type : DataTypes.INTEGER(11),
        allowNull : false,
        defaultValue : 0
    },
    is_notification : {
        type : DataTypes.INTEGER(11),
        allowNull : false,
        defaultValue : 1
    },
    status : {
        type : DataTypes.INTEGER(11),
        allowNull : false,
        defaultValue : 1,
    },
    company_id : {
        type : DataTypes.INTEGER(11),
        allowNull : true
    },
    salary : {
        type : DataTypes.TEXT,
        allowNull : true
    },
    security_amount : {
        type : DataTypes.INTEGER(11),
        allowNull : true
    },
    employee_code : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    experience : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    qualification : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    specialization : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    date_of_joining : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    date_of_birth : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    phone_number_2 : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    phone_number_mother : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    phone_number_father : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    phone_number_sibling : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    monthly_target : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    designation : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    login_toggle : {
        type : DataTypes.TINYINT(1),
        allowNull : false,
        defaultValue : 1
    },
    team_lead : {
        type : DataTypes.INTEGER(11),
        allowNull : true
    },
    department : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    description : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    slack_id : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    aadhar_card_front_image : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    aadhar_card_back_image : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    driver_license_image : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    pan_card_image : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    voter_id_image : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    passport_image : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    passport_back_image : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    contact_verified_at : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    email_verified_at : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    password : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    remember_token : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    maintance : {
        type : DataTypes.STRING(255),
        allowNull : true
    },
    createdAt : {
        type : DataTypes.DATE,
        allowNull : true
    },
    updatedAt : {
        type : DataTypes.DATE,
        allowNull : true
    },
    // deletedAt : {
    //     type : DataTypes.DATE,
    //     allowNull : true
    // }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
//   paranoid: true,
  modelName: 'User' // We need to choose the model name
});

module.exports = User;