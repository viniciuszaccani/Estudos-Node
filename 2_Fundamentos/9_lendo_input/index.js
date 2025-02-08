const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a sua comida favorita? ", (food)=>{
    if(food === "churrasco"){
        console.log("Boa escolha!")
    }else{
        console.log(`A minha comida preferida é: ${food}`)
    }
    
    readline.close()
})