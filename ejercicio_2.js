/**
 * @author Carlos Andres
 */

const entrada = 'sarasa'

function contarOcurrencias(param1, param2) {
  let contador = 0

  for (let i = 0; i < param1.length; i++) {
    contador = param1[i] === param2 ? contador + 1 : contador
  }

  const salida = `La cantidad de veces que se encontró ${param2} en ${param1} es: ${contador}`
  console.log(salida)
}

contarOcurrencias(entrada, 'r')
contarOcurrencias(entrada, 'a')
contarOcurrencias(entrada, 's')
contarOcurrencias(entrada, 'x')
