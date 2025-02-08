const chalk = require("chalk")

const nota = 10;


if(nota >= 7 ){
    console.log(chalk.green('parabens! Voce está aprovado!'))
} else {
    console.log(chalk.bgRed.bold('Você precisa fazer a prova de recuperação.'))
}