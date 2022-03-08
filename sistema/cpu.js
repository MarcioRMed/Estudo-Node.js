var os = require('os');


setInterval(()=>{


const {cpus} = os

const cpu = parseInt(cpus.user)

console.log(cpu)



},1000)


// console.log(os.totalmem());
// var os = require('os-utils');

// os.cpuUsage(function(v){
//     console.log( 'CPU Usage (%): ' + v );
// });
// console.log(os.freemem())