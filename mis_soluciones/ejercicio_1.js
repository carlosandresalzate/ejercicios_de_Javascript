/**
 * @author Carlos Andres
 */

const myString = 'Carlos Andres!'

for (let i = 0; i < myString.length; i++) {
  const salida = `En el indice ${i} posición ${i + 1} es igual a la letra ${
    myString[i]
  }`
  console.log(salida)
}
