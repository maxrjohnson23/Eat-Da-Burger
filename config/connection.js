const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    database: "burger_db",
    user: "root",
    port: 3306,
    password: "root"
});


module.exports = connection;