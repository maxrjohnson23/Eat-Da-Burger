const connection = require("./config/connection");
const Burger = require("./models/burger");
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Connect to the database and start express server
connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
            let newburg = new Burger("test burger");
            newburg.create().then(() => {
                console.log(newburg);
            });


            let burgers = Burger.selectBurgers().then((results) => {
                console.log(results);
            });
        });
    }
});