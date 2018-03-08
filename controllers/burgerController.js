const routes = require("express").Router();
const Burger = require("../models/burger");

routes.post("/api/burger", (req, res) => {
    if (!req.body.name) {
        res.status(500).send("Burger name is required")
    }
    let newBurger = new Burger(req.body.name);
    newBurger.create().then((id) => {
        res.send(id);
    });
});


module.exports = routes;
