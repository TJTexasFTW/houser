require('dotenv').config();
const express = require("express");
const massive = require("massive");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const controller = require("./controller");
app.use(express.json());

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log("Database connected");
    })
    .catch(err => console.log(err));

    app.post("/api/houses", controller.addHouse);
    app.get("/api/houses", controller.getHouses);
    // app.get("/api/products/:id", products_controller.getOne);
    // app.put("/api/products/:id", products_controller.update);
    app.delete("/api/houses/:id", controller.deleteHouse);


app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));
