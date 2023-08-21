/**
 * @author Carlos andres
 */

const myArray = ['abc', 'def', 'ghi', 'jkl']
const arr = ['hola', 'material girl', 'anatómico', 'pepito', 'rdr2']
const string = 'esto no es un array'

/* ********** */
/* Solución 1 */
/* ********** */
/* 
function reverse(param1) {
	const isArray = Array.isArray(param1)
	if (isArray) {
		let len = param1.length - 2
		for (let i = 0; i <= len; i++) {
			param1.push(param1[param1.length - i - 2])
			param1.splice(param1.length - i - 3, 1)
		}
		console.log(isArray)
		return isArray
	} else {
		console.log(isArray)
		return isArray
	}
}

reverse(myArray)
console.log(myArray)
reverse(string) */

/* ********** */
/* Solución 2 */
/* ********** */

function reverse(param1) {
	const isArray = Array.isArray(param1)

	function reversing(elem) {
		const newArray = []
		for (let i = elem.length; i > 0; i--) {
			newArray.push(elem.pop())
		}
		return Object.assign(param1, newArray)
	}

	if (isArray) {
		reversing(param1)
		console.log(isArray)
		return isArray
	} else {
		console.log(isArray)
		return isArray
	}
}

reverse(myArray)
reverse(string)
console.log(myArray)
console.log(arr)
