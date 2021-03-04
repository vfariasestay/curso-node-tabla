const fs = require('fs');
const {crearArchivo} = require('./helpers/multiplicar')
require('colors')
const argv= require('./config/yargs')


console.clear();
//console.log(process.argv);
console.log(argv);
console.log(argv.l);
//console.log(argv.base);



// const [,,arg3=5]=process.argv;
// const [,,base]=arg3.split('=');
// console.log(base);

//let base = 6;

crearArchivo(argv.b,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
