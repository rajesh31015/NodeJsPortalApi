const bodyParser = require("body-parser");

const urlEncoded = bodyParser.urlencoded({extended : false});
const urlJson = bodyParser.json();

module.exports = {
    urlEncoded,
    urlJson
}