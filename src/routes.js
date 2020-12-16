const express = require("express");
const router = express.Router();
const AuthController = require("./controllers/AuthController");
const CarsController = require("./controllers/Cars");

router.get("/cars", AuthController.auth, CarsController.all);
router.post("/cars", AuthController.auth, CarsController.create);

router.post("/login", AuthController.login);

module.exports = router;
