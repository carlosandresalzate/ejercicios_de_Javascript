/**
 * @author Carlos Andres
 *
 * Notas:
 * No es la salida espera, aunque es consistente con lo que se pide
 */

const users = [
  {
    nombre: 'Pedro Perez',
    email: 'pp@gmail.com',
    edad: 45,
    direccion: '9 de julio 3555'
  },
  {
    nombre: 'Eugenia Rismondo',
    email: 'er@gmail.com',
    edad: 19,
    direccion: '9 de julio 3550'
  },
  {
    nombre: 'Homero Simpson',
    email: 'homer@fox.com',
    edad: 33,
    direccion: 'Siempreviva 123'
  }
]

function filtrarUsuarios(arr, filtro) {
  function filtraObjs(objs) {
    let prop, val

    for ([prop, val] of Object.entries(filtro)) {
      objs.prop = prop
      objs.val = val
    }

    if (objs.hasOwnProperty(prop) && objs[prop] === val) {
      return objs
    }
  }

  const salida = arr.map(filtraObjs).filter((out) => {
    if (out !== undefined) {
      console.log('encuentra filtro: ', out)
      return out
    } else if (out === undefined) {
      // console.log("No encuentra", out)
      return out
    }
    return salida
  })

  return salida
}

const filtro1 = { edad: 45 }
const filtro2 = { edad: 55 }
const filtro3 = { edad: 19 }

console.log(filtrarUsuarios(users, filtro1))
console.log(filtrarUsuarios(users, filtro2))
console.log(filtrarUsuarios(users, filtro3))
