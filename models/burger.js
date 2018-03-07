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
Burger.prototype.addBurger = function () {
    return new Promise((resolve, reject) => {
        orm.insertOne("BURGERS", {
            burger_name: this.name,
            devoured: this.devoured
        }).then((results) => {
            resolve(results)
        }).catch(err => {
            console.log(err);
            reject(err)
        });
    });
};


module.exports = Burger;