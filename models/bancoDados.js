const Sequelize = require ('sequelize');
const sequelize = new Sequelize("desafio","root", "123456",{
    host: "Localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso ao Banco de Dados")
}).catch(function(){
    console.log("Falha ao Conectar com o BD!")
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}