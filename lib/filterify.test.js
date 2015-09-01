var expect = require('chai').expect
var filterify = require('./filterify')

describe('lib/filterify.js', function() {
	describe('filterify(transform)', function() {
		function expectStrictlyPositive(value) {
			if (value <= 0) throw new Error('Expected a number greater than 0')
		}

		it('should transform a function that throws on error into a filter', function() {
			var isStrictlyPositive = filterify(expectStrictlyPositive)
			expect(isStrictlyPositive(-1)).to.be.false
			expect(isStrictlyPositive(1)).to.be.true
		})
	})
})