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