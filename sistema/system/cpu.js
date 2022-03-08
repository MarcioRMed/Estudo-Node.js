const { info } = require('console')
var osu = require('node-os-utils')
var cpu = osu.cpu
var mem = osu.mem

// setInterval(() => {  

  cpu.usage()
  .then(info => {
    console.log(parseInt(info) + " % CPU")
  })
      
  cpu.free()
  .then(info => {
    console.log(parseInt(info) + " % RAM FREE")
  })

// },1000)

  mem.info()
  .then(info => {
    console.log(info)
  })


  // informações de usa do módulo
  // https://www.npmjs.com/package/node-os-utils

