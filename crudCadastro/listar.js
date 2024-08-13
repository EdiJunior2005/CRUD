let contatos = require('./usuarios')
function listarContatos() {
    contatos.forEach(contato => {
        console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Email: ${contato.email}`);
        contato.telefones.forEach((telefone, index) => {
            console.log(`Telefones: ${index+1}. ${telefone}`)
        })
    });
}
module.exports = { listarContatos }
