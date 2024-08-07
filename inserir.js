let contatos = require('./usuarios')
function inserir(contato) {
    contato.id = contatos.length + 1;
    let jaExiste = contatos.find(ctt => ctt.email === contato.email)
    if (jaExiste) {
        console.error('Email ja cadastrado')
    } else {
        contatos.push(contato)
        console.log('Inserido com sucesso!')
    }
}
module.exports = { inserir }