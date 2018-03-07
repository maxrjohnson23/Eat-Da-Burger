const connection = require("./connection");

const orm = {
    selectAll: function () {
        const query = "SELECT * FROM BURGERS";
        connection.query(query, (err, results) => {
            if (err) {
                throw err;
            } else {
                return results;
            }
        });
    },
    insertOne: function (burger) {
        const query = "INSERT INTO BURGER (burger_name, devoured) SET ?";
        connection.query(query, burger, (err, results) => {
            if (err) {
                throw err;
            } else {
                return results;
            }
        });
    },
    updateOne: function (burgerId) {
        const query = "UPDATE BURGER SET DEVOURED = 'Y' WHERE ID = ?";
        connection.query(query, [id], (err, results) => {
            if (err) {
                throw err;
            } else {
                return results;
            }
        })
    }
};

module.exports = orm;