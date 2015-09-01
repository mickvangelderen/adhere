module.exports = function expectify(transform, errorMessage) {
	function expect(value) {
		if (!transform.apply(null, arguments)) throw new Error(errorMessage)
		return value
	}
	expect.length = transform.length
	return expect
}
