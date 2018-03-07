const orm = require("../config/orm");

function Burger(name) {
    this.name = name;
    this.devoured = false;
};

Burger.selectBurgers = function () {
    return new Promise((resolve, reject) => {
        orm.selectAll("BURGERS").then((results) => resolve(results)).catch(err => reject(err));
    });
};
Burger.prototype.create = function () {
    return new Promise((resolve, reject) => {
        orm.insertOne("BURGERS", {
            burger_name: this.name,
            devoured: this.devoured
        }).then((results) => {
            console.log(results);
            this.id = results.insertId;
            resolve(results)
        }).catch(err => {
            reject(err)
        });
    });
};

// Burger.prototype.updateDevoured = function() {
//     return new Promise((resolve, reject) => {
//         orm.updateOne("BURGERS", "DEVOURED", true, "ID", this.id) {
//
//
//         }
//     })
// }


module.exports = Burger;