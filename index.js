// const express = require ('express')
// const app = express()
// app.get('/',(req,res)=>{
//     res.send('<h1> Hola </h1>')
// })
// app.listen('3000',
//     ()=> {console.log("Escuchando en el puerto 3000")
// })



const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(3000);

console.log('Escuchando en el puerto 3000');
