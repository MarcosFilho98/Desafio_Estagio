const express = require("express")
const app=express()
const handlebars = require("express-handlebars")
const bodyParser =require("body-parser")
const Post = require("./models/PostPessoa")
const PostAnimal = require("./models/PostAnimal")
const PostLote = require("./models/PostLote")
const pessoa = require("./pessoa")
//const animal = require("./animal");




//configurando handlebars -Template Engine
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Conexao com Banco de dadosMySql
/*const Sequelize = require ('sequelize');
const bancoDados = new Sequelize("desafio","root", "123456",{
    host: "Localhost",
    dialect: "mysql"
});*/

//Rotas
//Pessoa

app.get("/",function(req,res){
    res.render("formHome")
})
app.get("/pessoa",function(req,res){
    res.render("formPessoa")
})
 app.post("/cadastradoPessoa",function(req,res){
    PostPessoa.create({
        no_nome: req.body.no_nome,
        no_email: req.body.no_email,
        endereco: req.body.endereco,
        sexo: req.body.sexo,
        ic_ativo: req.body.ic_ativo

    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Ocorreu um erro com os dados das Pessoas!" + erro)
    })
 })

 //Animal
 app.get("/animal",function(req,res){
    res.render("formAnimal")
})
app.get("/",function(req,res){
    PostAnimal.create({
        no_animal: req.body.no_animal,
        no_raca: req.body.no_raca,
        sexo: req.body.sexo,
        vr_peso: req.body.vr_peso,
        dt_nascimento: req.body.dt_nascimento

    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Ocorreu um erro com os dados dos Animais!" + erro)
    })
 })

 //Lote
 app.get("/lote",function(req,res){
    res.render("formLote")
})
app.get("/",function(req,res){
    PostAnimal.create({
        no_lote: req.body.no_lote,
        ds_lote: req.body.ds_lote,
        

    }).then(function(){
        res.send("Salvo no Banco de Dados Animais!")
    }).catch(function(erro){
        res.send("Ocorreu um erro com os dados dos Animais!" + erro)
    })
 })

 /*app.get("/listaPessoas",function(req,res){
     Post.all().then(function(posts){
         res.render('formListaPessoas', {posts:posts})
     })
 })*/


app.listen(1998,function(){
    console.log("Servidor rodando na url http://localhost:1998")
});