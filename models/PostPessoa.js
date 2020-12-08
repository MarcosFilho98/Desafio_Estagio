const db =require("./bancoDados")

const Post = db.sequelize.define("pessoa",{
    no_pessoa: {
        type: db.Sequelize.STRING
    },
    no_email: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    sexo: {
        type: db.Sequelize.STRING
    },
    ic_ativo: {
        type: db.Sequelize.STRING
    }
})
module.exports = Post

//Post.sync({force: true})