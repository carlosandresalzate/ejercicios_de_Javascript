let miArray1 = ["Sigueme", "el", "Blanco", "Conejo"];
let miArray2 = ["Tortuga", "Otro","Viernes"];

// const vocales = new Array('a', 'e', 'i', 'o', 'u');
const vocales = ['a', 'e', 'i', 'o', 'u'];

function contarVocales(param1, param2) {
    let nuevoArray = new Array();

    for(let i = 0; i < param1.length; i++) {

        let contador = 0;
        let palabra = param1[i];

        for(let j = 0; j < param2.length; j++){

            let vocal = param2[j];
            let buscaVocal = palabra.indexOf(vocal);

            while(buscaVocal !== -1) {

                contador++
                buscaVocal = palabra.indexOf(vocal, buscaVocal + 1);        
            }

        }

        nuevoArray.push(contador);
    }    

    console.log(nuevoArray);
    return nuevoArray;
}

contarVocales(miArray1, vocales);
contarVocales(miArray2, vocales);