let contatos = require('./usuraios')
function editar(id,novoContato){
    const index = contatos.findIndex(contato => contato.id === id);
    if(id !== -1){
    contatos[index] = {id, ...novoContato}
   }else{
    console.error("Erro")
   }
}
module.exports = { editar }