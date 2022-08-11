/**
 * @author Carlos Andres
 */

const valor = 'kawabonga'

function agregarIndice(param1) {
  const entrada = param1.split('')
  let salida = ''
  for (let i = 0; i < entrada.length; i++) {
    salida += entrada[i] + i
  }

  console.log(salida)
  return salida
}

agregarIndice(valor)
