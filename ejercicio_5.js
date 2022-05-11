/**
 * @author Carlos Andres
 */

let arrayUno = [1, "casa", {}];
let arrayDos = [function(){}, true]

function transformarATipos(param1) {
    let newArray = param1.map((val) => typeof val);
    console.log(newArray);
}

transformarATipos(arrayUno);
transformarATipos(arrayDos);