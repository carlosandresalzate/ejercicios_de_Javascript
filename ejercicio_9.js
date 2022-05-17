/**
 * @author Carlos andres
 */

let myArray = ["abc", "def", "ghi", "jkl"];
let string = "esto no es un array";

function reverse(param1) {
    let salida = Array.isArray(param1);

    if(salida) {
        let reversed = param1.reverse();
        console.log(salida);
        return reversed;
    } else {
        console.log(salida);
    }
    return salida;
}

reverse(myArray);
console.log(myArray);