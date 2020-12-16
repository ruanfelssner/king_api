require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    res.json('Seja bem vindo!');
});

app.listen(PORT);