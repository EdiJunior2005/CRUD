let contatos = require('./usuraios')
function inserir(contato){
    contato.id = contatos.length + 1;
    contatos.push(contato)
    console.log('Inserido com sucesso!')
}
module.exports = { inserir }