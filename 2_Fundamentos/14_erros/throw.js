const x = "10"

//checando se x é um número

if(!Number.isInteger(x)){
    throw new Error("O valor de x não é um número inteiro!")
}

console.log("continuando o código.....")