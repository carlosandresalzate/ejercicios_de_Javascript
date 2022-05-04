/**
 * @author Carlos Andres
 */

let valor = "kawabonga";

function agregarIndice(param1) {
    let entrada = param1.split('');
    let salida = '';
    for (let i = 0; i < entrada.length; i++) {
        salida += entrada[i] + i;
    }

    console.log(salida );
    return salida;
}

agregarIndice(valor);

