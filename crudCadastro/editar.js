let contatos = require('./usuarios')
function editar(id, novoContato) {

    let index = contatos.findIndex(contato => contato.id === id);
    let jaExiste = contatos.find(ctt => ctt.email === novoContato.email )
    if (jaExiste) {
        console.error('Email ja cadastrado')
    } else {
        if (id !== -1) {
            contatos[index] = { id, ...novoContato }
            console.log('Editado com sucesso!!')
        } else {
            console.error("Erro")
        }
    }
}
module.exports = { editar }