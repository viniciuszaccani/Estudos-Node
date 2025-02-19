const _ = require('lodash')

//npm install -g lodash    para instalar globalmente o pacote
//npm link lodash          para vincular o pacote global com o projeto

const arr = [1,2,2,3,4,5,5]

console.log(_.sortedUniq(arr))