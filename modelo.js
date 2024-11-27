const fs = require('fs');

function guardarTexto(){
    fs.writeFileSync('./mitexto','Hola')
}

guardarTexto();