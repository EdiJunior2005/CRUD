let contatos = require('./usuraios')
function listarContatos() {
    contatos.forEach(contato => {
    console.log(`ID: ${contato.id}, Nome: ${contato.nome},
    Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
    }
module.exports = { listarContatos }