require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../models/User");

User.create({
    name: 'Administrador',
    password: bcrypt.hashSync("123456789", 10),
    email: 'contato@king.com.br'
})

User.findAll().then((result) => {
    console.log(result)
})