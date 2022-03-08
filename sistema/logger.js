//fica escutando
const EventEmitter = require("events");

//modulos de arquivos do sistema (grava no arquivo)
const fs = require('fs');

//pegar o caminho correto - idependente da máquina encontra o caminho correto
const path = require("path");

const emitter = new EventEmitter();

emitter.on("log", (message) => {
  
  fs.appendFile(path.join(__dirname, 'log.txt'), message, err =>{
    if(err) throw err
  })
  
  
  // console.log(message);

});


function log(message){
  emitter.emit('log', message)
}

log("Passar uma mensagem")



// exportar módulo
module.exports = log