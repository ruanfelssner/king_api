const { DataTypes } = require("sequelize");

const sequelize = require("../sequelize");

const Rifa = sequelize.define("rifas", {
    rifa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        _autoGenerated: true
    },
    statusRifa: DataTypes.INTEGER,
    name: DataTypes.STRING,    
    nomeRazao: DataTypes.STRING,    
    cpfCnpj: DataTypes.STRING,    
    email: DataTypes.STRING,    
    instagram: DataTypes.STRING,    
    whatsapp: DataTypes.STRING,    
    tipoPagamento: DataTypes.INTEGER,  
    tipoRifa: DataTypes.INTEGER,  
    qtdCotasDisponiveis: DataTypes.INTEGER,   
    qtdCotas: DataTypes.INTEGER,   
    valorCotas: DataTypes.INTEGER,   
    referenciaSorteio: DataTypes.INTEGER,   
    responsavel: DataTypes.INTEGER, 
    cidade: DataTypes.STRING,       
    estado: DataTypes.STRING,       
    fabricante: DataTypes.STRING,       
    modelo: DataTypes.STRING,       
    versao: DataTypes.STRING,       
    motor: DataTypes.STRING,       
    anoModelo: DataTypes.STRING,       
    cor: DataTypes.STRING,       
    avatar: DataTypes.TEXT,       
    descricao: DataTypes.TEXT,
    previsaoSorteio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

// Create table if not exists...
const init = async () => {
    await Rifa.sync();
}

init ();

module.exports = Rifa;