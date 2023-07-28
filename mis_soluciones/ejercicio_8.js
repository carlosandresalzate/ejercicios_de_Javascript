/**
 * @author Carlos andres
 *
 */
const vocales = ['a', 'e', 'i', 'o', 'u']

const miArray1 = ['Sigueme', 'el', 'Blanco', 'Conejo']
const miArray2 = ['Tortuga', 'otro', 'Viernes']
const arrayEntrada = ['follow', 'the', 'white', 'rabbit']

function contarVocales(param1, param2) {
  const nuevoArray = []

  for (let i = 0; i < param1.length; i++) {
    let contador = 0
    const palabra = param1[i]

    for (let j = 0; j < param2.length; j++) {
      const vocal = param2[j]
      let buscaVocal = palabra.indexOf(vocal)

      while (buscaVocal !== -1) {
        contador++
        buscaVocal = palabra.indexOf(vocal, buscaVocal + 1)
      }
    }

    nuevoArray.push(contador)
  }

  console.log(nuevoArray)
  return nuevoArray
}

contarVocales(miArray1, vocales)
contarVocales(miArray2, vocales)
contarVocales(arrayEntrada, vocales)
