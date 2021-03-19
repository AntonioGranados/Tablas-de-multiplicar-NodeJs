//importamos el file system
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {
    try {
        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++) {
            salida += `El resultado de ${base} * ${i} es: ${base * i}\n`;
            consola += `${colors.yellow(`El resultado de `)} ${base} ${'*'.red} ${i} ${colors.yellow(`es:`)} ${colors.white(`${base * i}\n`)}`;
        }

        if (listar) {
            console.log(`${colors.red(`==================`)}`);
            console.log(`${colors.bgRed(`${colors.trap(`Tabla del ${base}`)}`)}`);
            console.log(`${colors.white(`==================`)}`);     
            console.log(consola);
        } 

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `${colors.green(`tabla-${base}.txt creado correctamente`)} `;
            
    } catch (error) {
        throw error;
    }
}



module.exports = {
    crearArchivo
}