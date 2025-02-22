const express = require('express')
const app = express();
const port = 3000; //variavel ambiente

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next){

    req.authStatus = true;

    if(req.authStatus){
        console.log("Está logado, pode prosseguir.")
        next()
    } else {
        console.log("Não está logado, faça o login para continuar")
        next() //deixando o usuario prosseguir para nao travar a tela.
    }
}

app.use(checkAuth)



app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})