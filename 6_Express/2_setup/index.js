const express = require('express')
const app = express();
const port = 3000; //variavel ambiente


app.get('/', (req, res) => {
    res.send('olá Mundo')
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})