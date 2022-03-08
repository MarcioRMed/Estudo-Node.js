// aula Node
// https://www.youtube.com/watch?v=DiXbJL3iWVs&ab_channel=Rocketseat

//Vericar memória do computador

//importa módulos
const os = require("os");
const log = require("./logger")


//rodar a cada 1seg ( evento loop)
setInterval(() => {
  console.clear()
  //destruturação
  const { freemem, totalmem } = os;
  
  const mem = parseInt(freemem() / 1024 / 1024);
  const total = parseInt(totalmem() / 1024 / 1024);
  const percents = parseInt((mem/total)*100)
  
  const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percents}%`
  }

  console.clear()
  console.log("    === PC STATS ===")
  console.table(stats)


  log('Rodando...')

  log(`${JSON.stringify(stats)} \n`)
}, 1000)




