const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    name: "",
    user: "root",
    port: 3306,
    password: ""
});


module.exports = connection;