/**
 * @author Carlos Andres
 */

let palabra = "Hola Mundo!";
let newArray = palabra.split('');
console.log(newArray)

function concatenar(param1) {
    let entrada = param1.join('')
    console.log(entrada);
}

concatenar(newArray)