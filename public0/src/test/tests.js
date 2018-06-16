const expect = chai.expect

describe('calculator', function () {
  it('is an object', function () {
    expect(calculator).to.be.a('object')
  })

  describe('#add', function () {
    it('should be a function', function () {
      expect(calculator.add).to.be.a('function')
    })

    it('should add two numbers together', function () {
      expect(calculator.add(10,20)).to.equal(30)
    })
  })

  describe('#subtract', function () {
    it('should be a function', function () {
      expect(calculator.subtract).to.be.a('function')
    })

    it('should subtract second input from first', function () {
      expect(calculator.subtract(20,10)).to.equal(10)
    })
  })

})
