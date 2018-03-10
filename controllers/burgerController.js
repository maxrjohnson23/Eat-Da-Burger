const routes = require("express").Router();
const Burger = require("../models/burger");

routes.get("/", function (req, res) {
    Burger.selectBurgers().then((result) => {
        console.log(result);
        let devoured = result.filter(b => b.devoured === 1);
        let undevoured = result.filter(b => b.devoured === 0);
        res.render("index", {
            undevouredList: undevoured,
            devouredList: devoured
        });
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
    Burger.create(newBurger).then((id) => {
        res.json(id);
    });
});

routes.put("/api/burger/:id", (req, res) => {
    console.log('Hit update route ' + req.params.id);
    Burger.updateDevoured(req.params.id).then((result) => {
        res.json(result);
    });
});


module.exports = routes;
