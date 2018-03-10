const routes = require("express").Router();
const Burger = require("../models/burger");

routes.get("/", function (req, res) {
    Burger.selectBurgers().then((result) => {
        console.log(result);
        let eaten = result.filter(b => b.devoured === 1);
        let uneaten = result.filter(b => b.devoured === 0);
        console.log(eaten);
        console.log(uneaten);
        res.render("index", {burgers: result});
    });
});

routes.get("/api/burger", (req, res) => {
    Burger.selectBurgers().then((result) => {
        res.send(result);
    })
});

routes.post("/api/burger", (req, res) => {
    if (!req.body.name) {
        res.status(500).send("Burger name is required")
    }
    let newBurger = new Burger(req.body.name);
    newBurger.create().then((id) => {
        res.send(id);
    });
});

routes.put("/api/burger/:id", (req, res) => {
    console.log('Hit update route ' + req.params.id);
});


module.exports = routes;
