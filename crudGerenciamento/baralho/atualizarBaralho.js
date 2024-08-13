const { baralhos } = require("../data");

function atualizarBaralho(id, novoNome){
    let index = baralhos.findIndex(baralho => baralho.id === id);
    if (index !== -1) {
        baralhos[index] = { id, ...novoNome }
        console.log('Editado com sucesso!!')
    } else {
        console.error("Erro")
    }
}
module.exports = { atualizarBaralho }