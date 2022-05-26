/**
 * @author Carlos Andres
 */

const objetoNumeros = {
    "a": 1,
    "b": 2,
    "c": 3
};

const arrayDeFiltros1 = ['a','d'];
const arrayDeFiltros2 = ['a', 'b', 'h'];
const arrayDeFiltros3 = ['a', 'b', 'c', 'z'];

function filtrarKeys(obj, array) {
    let salida;

    salida = array.filter(val => {
        let filtro = obj.hasOwnProperty(val) === true;
        return filtro;
    });

    return salida;
}

console.log(filtrarKeys(objetoNumeros, arrayDeFiltros1));
console.log(filtrarKeys(objetoNumeros, arrayDeFiltros2));
console.log(filtrarKeys(objetoNumeros, arrayDeFiltros3));