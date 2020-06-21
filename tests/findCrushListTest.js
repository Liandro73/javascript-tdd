const should = require('should')
const findCrushs = require('../findCrushs')

describe('find cruchs', () => {
    it('soma chushs', () => {
        findCrushs.somaCrush(2, 3).should.be.equal(5)
    })
    it('deve somar dois numeros e retornar 30', () => {
        findCrushs.somaCrush(10, 20).should.be.equal(30)
    })
    it('passar um nome e deve retornar mensagfem de pessoa não encontrada', () => {
        findCrushs.encontraCrush('Joselita Marques').should.be.equal('Crush não encontrada')
    })
    it('retorna a mensagem Campo nome está vazio', () => {
        findCrushs.encontraCrush().should.be.equal('Campo nome está vazio')
    })
    it('Retornas mensagem de tipo inválido', () => {
        findCrushs.encontraCrush(123).should.be.equal('Tipo inválido')
    })
    it('Deve retornar um nome da lista', () => {
        findCrushs.encontraCrush('Elainy Rodrigues').should.be.equal('Elainy Rodrigues')
    })
})