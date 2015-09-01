var expect = require('chai').expect
var expectify = require('./expectify')

describe('lib/expectify.js', function() {
	describe('expectify(transform)', function() {
		function isStrictlyPositive(value) {
			return value > 0
		}

		it('should transform a filter into a function that throws on error', function() {
			var expectStrictlyPositive = expectify(isStrictlyPositive, 'Expected a number greater than 0')
			expect(function() {
				expectStrictlyPositive(-1)
			}).to.throw('Expected a number greater than 0')
			expect(expectStrictlyPositive(1)).to.equal(1)
		})
	})
})