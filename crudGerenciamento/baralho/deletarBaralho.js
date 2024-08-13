const { baralhos } = require("../data");

function deletarBaralho(id){
    let index = baralhos.findIndex(baralho => baralho.id === id)
    if(index !== -1){
    baralhos.splice(index,1)
    console.log('Deletado com sucesso!!!')
    }else{
        console.error('id invalido!!')
    }
}
module.exports = { deletarBaralho }