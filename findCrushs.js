const listaDeCrush = [
    "Elainy Rodrigues",
    "Silva",
    "Liandro"
]

const somaCrush = (n1, n2) => n1 + n2

const encontraCrush = nome => {
    try {
        validacao(nome)
        const crushEncontrado = listaDeCrush.find(crush => crush === nome)
        return crushEncontrado ? crushEncontrado : 'Crush não encontrada'
    } catch(erro) {
        return erro
    }
}

const validacao = nome => {
    if(!nome) throw 'Campo nome está vazio'
    if(typeof nome !== 'string') throw 'Tipo inválido'
}

module.exports = {
    somaCrush,
    encontraCrush
}