/**
 * @author Carlos Andres
 */

const objNum = {
    "a": 1,
    "b": 2,
    "c": 3
};

const arrDeFiltros1 = ['a','d'];
const arrDeFiltros2 = ['a', 'b', 'h'];
const arrDeFiltros3 = ['a', 'b', 'c', 'z'];


function filtrarKeys(obj, array, exclusion = false) {
    let salida;
    
    if (exclusion === true) {
        let propObj = Object.keys(obj);
        salida = propObj.filter(val => {
            let filtro = array.indexOf(val);
            if(filtro === -1){
                return val;
            }
        });
    } else {
        salida = array.filter(val => {
            let filtro = obj.hasOwnProperty(val) === true;
            return filtro;
        });
    }


    return salida;

}

console.log('exclusion', filtrarKeys({ "a":1, "b":2, "c":3 }, ["a", "c"], true));
console.log('exclusion', filtrarKeys({ "a":1, "b":2, "c":3 }, ["a", "b", "c"], true));
console.log('exclusion', filtrarKeys({ "a":1, "b":2, "c":3 }, ["c"], true));
console.log('inclusion', filtrarKeys({ "a":1, "b":2, "c":3 }, ["c"]));

// console.log('inclusion:', filtrarKeys(objNum, arrDeFiltros1));
// console.log('exclusion:',filtrarKeys(objNum, arrDeFiltros1, true));
// console.log('inclusion:', filtrarKeys(objNum, arrDeFiltros2));
// console.log('exclusion:',filtrarKeys(objNum, arrDeFiltros2, true));
// console.log('inclusion:', filtrarKeys(objNum, arrDeFiltros3));
// console.log('exclusion:',filtrarKeys(objNum, arrDeFiltros3, true));