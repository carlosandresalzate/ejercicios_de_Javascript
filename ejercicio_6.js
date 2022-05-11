/**
 * @author Carlos Andres
 */

let objeto_1 = {a: 1, b: "z", c: 3};
let objeto_2 = {a: "f", b: true};

function aArrayDeValores(param1) {
    let salida = new Array();
    // Usando for in
    /* 
    for(val in param1){
        salida.push(param1[val]);
    }
     */
    // Usando Object.keys(aquí se pasa el parámetro)
    
    /*
    for(val of Object.keys(param1)) {
        salida.push(param1[val]);
    } 
    */

    // Usando for of con Object.values(aquí se pasa el parámetro)
    for(val of Object.values(param1)) {
        salida.push(val)
    }
    console.log(salida)
}

aArrayDeValores(objeto_1);
aArrayDeValores(objeto_2);