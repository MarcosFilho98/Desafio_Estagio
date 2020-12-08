const db =require("./bancoDados")

const Post = db.sequelize.define("Animais",{
    fk_id_pessoa: {
        type: db.Sequelize.INTEGER
    },
    id_fazenda: {
        type: db.Sequelize.INTEGER
    },
    no_animal: {
        type: db.Sequelize.STRING
    },
    no_raca: {
        type: db.Sequelize.STRING
    },
    sexo: {
        type: db.Sequelize.STRING
    },
    vr_peso: {
        type: db.Sequelize.STRING
    },
    dt_nascimento: {
        type: db.Sequelize.STRING
    }
})
module.exports = Post

//Post.sync({force: true})