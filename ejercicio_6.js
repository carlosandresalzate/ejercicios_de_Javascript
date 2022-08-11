/**
 * @author Carlos Andres
 */

const objetoUno = { a: 1, b: 'z', c: 3 }
const objetoDos = { a: 'f', b: true }

function aArrayDeValores(param1) {
  const salida = []
  // Usando for in

  for (const val in param1) {
    salida.push(param1[val])
  }

  // Usando Object.keys(aquí se pasa el parámetro)

  /* for (const val of Object.keys(param1)) {
    salida.push(param1[val])
  } */

  // Usando for of con Object.values(aquí se pasa el parámetro)

  /*  for (const val of Object.values(param1)) {
    salida.push(val)
  }
 */
  // Usando for in
  /* for (const propiedad in param1) {
    salida.push(param1[propiedad])
  } */

  console.log(salida)
}

aArrayDeValores(objetoUno)
aArrayDeValores(objetoDos)
