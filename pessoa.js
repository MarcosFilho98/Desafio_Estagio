const Sequelize = require ("sequelize");
const bancoDados = require("./models/bancoDados");

var pessoa = function(){
    const Pessoa = bancoDados.define("Pessoas",{
        no_pessoa:{
            type: Sequelize.STRING
        },
        no_email:{
            type: Sequelize.STRING
        },
        endereco:{
            type: Sequelize.TEXT
        },
        sexo:{
            type: Sequelize.CHAR
        },
        ic_ativo:{
            type: Sequelize.BOOLEAN
        }
    })

        Pessoa.sync({force:true})
}
module.exports = pessoa;