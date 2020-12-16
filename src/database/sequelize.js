const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions:{
        ssl:{
            rejectUnauthorized: false
        }
    }
});
sequelize.authenticate()
.then(() => console.log("Conexão estabelizada com sucesso!"))
.catch((err) => console.error("Erro ao conectar", err))

module.exports = sequelize