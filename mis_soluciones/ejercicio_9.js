/**
 * @author Carlos andres
 */

const myArray = ['abc', 'def', 'ghi', 'jkl']
const string = 'esto no es un array'

function reversed(param1) {
	const isArray = Array.isArray(param1)

	function reversing(elem) {
		const newArray = []
		for (let i = elem.length; i > 0; i--) {
			let item = elem.pop()
			newArray.push(item)
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

reversed(myArray)
reversed(string)
console.log(myArray)
