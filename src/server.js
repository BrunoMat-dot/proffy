// Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configurar nunjucks (template engine)
const nunjuncks = require('nunjucks')
nunjuncks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor
server
// configurar arquivos estáticos (css, scripits, imagens)
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
// start do servidor
.listen(5500)