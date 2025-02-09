const inquirer = require('inquirer')
const chalk = require("chalk")

inquirer.prompt([{
        name: 'nome',
        message: "Qual o seu nome? ",
    },
    {
        name: 'idade',
        message: "Qual a sua idade? ",
    }])
    .then((answers) => {
        if(!answers.nome || !answers.idade){
            throw new Error("O nome e a idade são campos obrigatórios!")
        }
        const nome = answers.nome;
        const idade = answers.idade;
        try{
            console.log(chalk.bgYellow.black.bold(`O nome informado é: ${nome}, e a idade é: ${idade} anos.`))
        }catch(err){
            console.log(`Erro: ${err}`)
        }
        
    }).catch((err) => console.log(err))