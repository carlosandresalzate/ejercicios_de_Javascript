# Ejercicio de Javascript

Este repositorio tiene el propósito de alojar los ejercicios que voy desarrollando en JavaScript, los cuales son los trabajos prácticos de diferentes libros, cursos y repositorios que voy leyendo.
Con esto espero desarrollar mejor mis habilidades en JavaScript y lógica de programación.

## Ejercicio N° 1

<details>
<summary>📚 Strings</summary>

Crear una variable que reciba un string y retorne la misma, pero agregando después de cada carácter su índice correspondiente. Es decir, que retorne el mismo string transformado de la siguiente forma.

```
    En el indice 0 posición 1 es igual a la letra C
    En el indice 1 posición 2 es igual a la letra a
    En el indice 2 posición 3 es igual a la letra r
    En el indice 3 posición 4 es igual a la letra l
    En el indice 4 posición 5 es igual a la letra o
    En el indice 5 posición 6 es igual a la letra s
```

</details>

## Ejercicio N° 2

<details>
<summary>📚 Strings</summary>

Escriba una función que reciba dos parámetros del tipo string. La función deberá retornar la cantidad de apariciones que tiene el segundo parámetro en el primer parámetro.

```js
console.log(contarOcurrencias("sarasa" "a")); // imprime 3
console.log(contarOcurrencias("sarasa" "z")); // imprime 0
```

</details>

## Ejercicio N° 3

<details>
<summary>📚 Strings</summary>
hacer una función que reciba un string y retorne el mismo string pero agregando después de cada carácter su indice. Es decir, que retorne el mismo string de la siguiente forma:

```js
console.log(agregarIndice("kawabonga")); // imprime "k0a1w2a3b4o5n6g7a8"
console.log(agregarIndice("casa")); // imprime "c0a1s2a3"
```

</details>

## Ejercicio N° 4

<details>
<summary>📚  Arrays</summary>

Hacer una función que reciba un array de string y retorne un string igual a la concatenación de todos sus elementos


```js
console.log(concatenar([ 's', 'a', 'r', 'a', 's', 'a' ])) // imprime "sarasa"
console.log(concatenar([ 'h', 'o', 'l', 'a' ])) // imprime "hola"
```

</details>

## Ejercicio N° 5

<details>
<summary>📚 Arrays</summary>

Hacer una función que reciba un array y retorne otro array con la misma cantidad de elementos, pero que cada elemento sea el tipo de dato del array original.

```js
console.log(transformarATipos([1, "casa", {}])); // imprime ["number", "string", "object"]
console.log(transformarATipos([function(){}, true])); // imprime ["function", "boolean"]
```
</details>

## Ejercicios N° 6

<details>
<summary>📚 Objects</summary>

Hacer una función que reciba un objeto y retorne un array con todos los valores de sus propiedades como elementos.

```js
console.log(aArrayDeValores({a: 1, b: "z", c: 3})); // imprime [1, "z", 3]
console.log(aArrayDeValores({a: "f", b: true})); // imprime ["f", true]

```

</details>

## Ejercicio N° 7

<details>
<summary>📚 Objects</summary>

Hacer una función que reciba un objeto el cual posee propiedades con valores de string como resultado de la concatenación de todos los valores de las propiedades del objeto. 

```js
console.log(concatenarObj({a: "h", b: "o", c: "l", d: "a"})) // imprime "hola"
console.log(concatenarObj({z: "sa", x: "ra", y: "sa"})) // imprime "sarasa"

```

</details>

## Ejercicio N° 8

<details>
<summary>📚 arrays</summary>

Hacer una función que reciba un array de palabras(strings) que retorne un array con la cantidad de vocales de cada palabra.

```js
console.log(contarVocales(["follow", "the", "white", "rabbit"])) // imprime [2, 1, 2, 2]
console.log(contarVocales(["Sigueme", "el", "Blanco", "Conejo"])) // imprime [4, 1, 2, 3]

```
El resultado o salida es el conteo de las vocales por cada string en el array de strings

</details>

## Ejercicio N° 9

<details>
<summary>📚 arrays</summary>

Crear una función que replique el funcionamiento de [Array reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse), o dicho de otra manera, codificar una función que reciba como parámetro un array, e invierta el orden de los elementos.

```sh
> let myArray = ["abc", "def", "ghi", "jkl"];
undefined
> reverse(myArray);
true
> console.log(myArray);
['jkl', 'ghi', 'def', 'abc']
undefined
> reverse("esto no es un array");
false
> 
```

Tener en cuenta que si bien al invocar esta función se obtiene un resultado similar que al aplicar .reverse(), ademas se pide una funcionalidad adicional:
* retornar **true**: en el caso que el parámetro especificado sea un Array
* retornar **false**: en el caso que el parámetro especificado NO sea un Array.

</details>

## Ejercicio N° 10
<details>
<summary>📚 Objects</summary>

#### Parte 1

<details>

Escribir una función que reciba un objeto como primer parámetro _obj_ y un array _filtros_ de _strings_ como segundo parámetro. Dado un objeto particular, la función **filtrarKeys** deberá retornar una lista de las propiedades ( es decir, una lista de keys) que contenga alguno de los elementos del array _filtros_ en su nombre. Es decir, debería comportarse de la siguiente manera:

```sh
filtrarKeys({ "a":1, "b":2, "c":3 }, ["a"])
["a"]
```

</details>

#### Parte 2
<details>

Agregar a la función **filtrarKeys** un tercer parámetro opcional que indique si se desea filtrar por inclusion o exclusion. Por defecto, es decir si ningún parámetro es especificado, la función deberá filtrar por inclusion.

```sh
filtrarKeys({ "a":1, "b":2, "c":3 }, ["a", "c"], true)
["b"]
filtrarKeys({ "a":1, "b":2, "c":3 }, ["a", "b", "c"], true)
[]
filtrarKeys({ "a":1, "b":2, "c":3 }, ["c"], true)
["a", "b"]
filtrarKeys({ "a":1, "b":2, "c":3 }, ["c"])
["c"]
```
</details>

##### Recursos

* [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
* [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
* [Objetos y sus keys](https://gist.github.com/a0viedo/57e0ffcc00cb5e5abc23)

</details>
