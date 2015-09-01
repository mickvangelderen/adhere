module.exports = function filterify(transform) {
	function filter() {
		try {
			transform.apply(null, arguments)
			return true
		} catch (error) {
			return false
		}
	}
	filter.length = transform.length
	return filter
}
