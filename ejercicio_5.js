/**
 * @author Carlos Andres
 */

const arrayUno = [1, 'casa', {}]
const arrayDos = [function () {}, true]

function transformarATipos(param1) {
  // usando map
  /*
  let newArray = param1.map((val) => typeof val);
  console.log(newArray);
  */

  // usando forEach
  const nuevoArray = []
  param1.forEach((valor, indice, array) => {
    nuevoArray.push(typeof valor)
  })

  console.log(nuevoArray)
}

transformarATipos(arrayUno)
transformarATipos(arrayDos)
