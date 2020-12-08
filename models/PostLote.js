const db =require("./bancoDados")

const Post = db.sequelize.define("Fazenda",{
    no_lote: {
        type: db.Sequelize.STRING
    },
    ds_lote: {
        type: db.Sequelize.STRING
    }
})
module.exports = Post

//Post.sync({force: true})