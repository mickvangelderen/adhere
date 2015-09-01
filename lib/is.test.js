var expect = require('chai').expect
var is = require('./is')
var types = require('type-samples')

describe('lib/is.js', function() {
	describe('is.date(value)', function() {
		types.forEach(function(type) {
			it('should' + (type.isDate ? '' : ' not') + ' see ' + type.name + ' as a date', function() {
				expect(is.date(type.value)).to.equal(type.isDate || false)
			})
		})
	})

	describe('is.regexp(value)', function() {
		types.forEach(function(type) {
			it('should' + (type.isRegExp ? '' : ' not') + ' see ' + type.name + ' as an regular expression', function() {
				expect(is.regexp(type.value)).to.equal(type.isRegExp || false)
			})
		})
	})
})
