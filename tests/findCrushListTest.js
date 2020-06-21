const should = require('should')
const findCrushs = require('../findCrushs')

describe('find cruchs', () => {
    it('soma chushs', () => {
        findCrushs.somaCrush(2, 3).should.be.equal(5)
    })
    it('deve somar dois numeros e retornar 30', () => {
        findCrushs.somaCrush(10, 20).should.be.equal(30)
    })
})