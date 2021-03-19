const yargs = require('yargs').option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true, //valor obligatorio
    describe: 'Es la base de la tabla de multiplicar'

}).check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un numero';
    }
    return true;
}).option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar en consola'
}).option('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Indica hasta que numero se va a mostrar la multiplicación'
}).argv; 

module.exports = yargs;