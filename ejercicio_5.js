/**
 * @author Carlos Andres
 */

let arrayUno = [1, "casa", {}];
let arrayDos = [function(){}, true]

function transformarATipos(param1) {

    // usando map
/* 
    let newArray = param1.map((val) => typeof val);
    console.log(newArray);
     */

    // usando forEach
    let nuevoArray = new Array();
    param1.forEach((valor, indice, array) => {
        nuevoArray.push(typeof valor);
    });

    console.log(nuevoArray);

}

transformarATipos(arrayUno);
transformarATipos(arrayDos);