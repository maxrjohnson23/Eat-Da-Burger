const routes = require("express").Router();
const Burger = require("../models/burger");

routes.get("/", function (req, res) {
    Burger.selectBurgers().then(result => {
        // Populate results based on devoured status
        let devoured = result.filter(b => b.devoured === 1);
        let undevoured = result.filter(b => b.devoured === 0);
        res.render("index", {
            undevouredList: undevoured,
            devouredList: devoured
        });
    }).catch((err) => {
        res.status(500).send({error: err});
    });
});

routes.get("/api/burger", (req, res) => {
    Burger.selectBurgers().then((err, result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send({error: err});
    });
});

routes.post("/api/burger", (req, res) => {
    if (!req.body.name) {
        res.status(500).send({error: "Burger name is required"});
    }
    let newBurger = new Burger(req.body.name);
    Burger.create(newBurger).then(id => {
        res.json(id);
    }).catch((err) => {
        res.status(500).send({error: err});
    });
});

routes.put("/api/burger/:id", (req, res) => {
    Burger.updateDevoured(req.params.id).then(result => {
        res.json(result);
    }).catch((err) => {
        res.status(500).send({error: err});
    });
});


module.exports = routes;
