const path = require("path")

const customPath = "/relatorio/usuario/relatorio1.pdf"

console.log(path.dirname(customPath)) //caminhp até o arquivo
console.log(path.basename(customPath)) //nome do arquivo
console.log(path.extname(customPath)) //formato do arquivo