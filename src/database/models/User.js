const { DataTypes } = require("sequelize");

const sequelize = require("../sequelize");

const User = sequelize.define("users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: DataTypes.STRING,
    picture: DataTypes.STRING,
    dataCadastro: DataTypes.DATE
})

// Create table if not exists...
const init = async () => {
    await User.sync();
}

init ();

module.exports = User;