var is = module.exports = require('adhere-core').is

is.date = generateNativeStringEquals('[object Date]')
is.regexp = generateNativeStringEquals('[object RegExp]')

function generateNativeStringEquals(string) {
	var nativeToString = Object.prototype.toString
	return function(value) {
		return nativeToString.call(value) === string
	}
}
