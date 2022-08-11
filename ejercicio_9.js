/**
 * @author Carlos andres
 */

const myArray = ['abc', 'def', 'ghi', 'jkl']
const string = 'esto no es un array'

function reverse(param1) {
  const salida = Array.isArray(param1)

  if (salida) {
    const reversed = param1.reverse()
    console.log(salida)
    return reversed
  } else {
    console.log(salida)
  }
  return salida
}

reverse(myArray)
reverse(string)
console.log(myArray)
