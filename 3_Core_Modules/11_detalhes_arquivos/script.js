const fs = require("fs")

//pode ser usado a pasta também ao invés de novoArquivo.txt
fs.stat("novoArquivo.txt", (err, stats) => {
    if(err){
        console.log(err)
        return;
    }
    console.log(stats.isFile()) //é um arquivo?
    console.log(stats.isDirectory()) //é um diretório?
    console.log(stats.isSymbolicLink()) //é um atalho? (SymbolicLink = arquivo que funciona como um atalho para outro arquivo ou diretório)
    console.log(stats.ctime) //horario de criação do arquivo
    console.log(stats.size) //tamanho do arquivo
})