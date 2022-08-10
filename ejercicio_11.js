/**
 * @author Carlos Andres
 *
 */

const array1 = ['a', 'b', 'c']
const array2 = ['q', 'x', 'y', 'z']

/**
 *
 * version con for()
 */

function invertirYConcatenarArrays(arr1, arr2) {
  let salida = ''
  let reverse = ''
  console.log(arguments.length)
  for (let i = 0; i < arguments.length; i++) {
    for (let j = arguments[i].length - 1; j >= 0; j--) {
      reverse += arguments[i][j]
    }
  }

  salida = reverse.split('')
  console.log(salida)
  return
}

invertirYConcatenarArrays(array1, array2)
