var adhere = require('./')
var expect = require('chai').expect

describe('lib/index.js', function() {

	it('should expose clone', function() {
		expect(adhere).to.have.ownProperty('clone')
		expect(adhere.clone).to.be.a('function')
	})

	it('should expose expectify', function() {
		expect(adhere).to.have.ownProperty('expectify')
		expect(adhere.expectify).to.be.a('function')
	})

	it('should expose filterify', function() {
		expect(adhere).to.have.ownProperty('filterify')
		expect(adhere.filterify).to.be.a('function')
	})

	it('should expose is', function() {
		expect(adhere).to.have.ownProperty('is')
		expect(adhere.is).to.be.an('object')
	})

})
