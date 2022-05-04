/**
 * @author Carlos Andres
 */

let entrada = "sarasa";

function contarOcurrencias(param1, param2) {
    let array = param1.split('');

    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        contador = array[i] === param2 ? contador + 1 : contador;
    };

    let salida = `La cantidad de veces que se encontró ${param2} en ${param1} es: ${contador}`;
    console.log(salida);
};

contarOcurrencias(entrada, "r");
contarOcurrencias(entrada, "a");
contarOcurrencias(entrada, "s");
contarOcurrencias(entrada, "x");