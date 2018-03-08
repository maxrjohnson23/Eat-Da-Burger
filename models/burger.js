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
            // Get db generated ID
            this.id = results.insertId;
            resolve({
                id: this.id
            });
        }).catch(err => {
            reject(err)
        });
    });
};

Burger.prototype.updateDevoured = function () {
    return new Promise((resolve, reject) => {
        this.devoured = true;
        orm.updateOne("BURGERS", "DEVOURED", this.devoured, "ID", this.id).then((results) => {
            resolve(results)
        }).catch(err => reject(err));
    })
}


module.exports = Burger;