/**
 * @author Carlos Andres
 */

const palabra = 'Hola Mundo!'
const newArray = palabra.split('')
console.log(newArray)

function concatenar(param1) {
  const entrada = param1.join('')
  console.log(entrada)
}

concatenar(newArray)
