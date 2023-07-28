/**
 * @author Carlos Andres
 */

const myObject1 = { a: 'h', b: 'o', c: 'l', d: 'a' }
const myObject2 = { z: 'sa', x: 'ra', y: 'sa' }

function concatenarObj(param1) {
  let salida
  for (const val in param1) {
    salida = Object.values(param1).join('')
  }
  return salida
}

console.log(concatenarObj(myObject1))
console.log(concatenarObj(myObject2))
