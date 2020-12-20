const express = require("express");
const router = express.Router();
const RifasController = require("./controllers/RifasController");
const AuthController = require("./controllers/AuthController");
const CarsController = require("./controllers/Cars");

router.get("/cars", AuthController.auth, CarsController.all);
router.post("/cars", AuthController.auth, CarsController.create);

router.post("/login", AuthController.login);
router.post("/login/Add", AuthController.add);
router.post("/login/Token", AuthController.token);
router.get("/login/All", AuthController.auth, AuthController.all);


router.post("/rifas", AuthController.auth, RifasController.rifas);
router.post("/rifas/add", AuthController.auth, RifasController.add);

module.exports = router;
