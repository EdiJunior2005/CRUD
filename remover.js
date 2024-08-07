let contatos = require('./usuarios')

function remover(id) {
    let index = contatos.findIndex(contato => contato.id === id)
    if (index !== -1) {
        contatos.splice(index, 1)
        console.log('Usuario excluída com sucesso!')
    } else {
        console.error('nao ha nada melhor nao ha nada nada melhor que o meu Deus')
    }
}
module.exports = { remover }