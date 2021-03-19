const { crearArchivo } = require('./helpers/multiplicar');
const yargs = require('./config/yargs');

console.clear();

crearArchivo(yargs.b, yargs.l, yargs.h).then(nombreArchivo => console.log(nombreArchivo))
                  .catch(err => console.log(err));


