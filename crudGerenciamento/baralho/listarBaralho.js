const { baralhos } = require("../data")

function listarBaralho(){
    baralhos.forEach(baralho => {
        console.log(`id: ${baralho.id}, Baralhos: ${baralho.titulo}`)
    })
}
module.exports = { listarBaralho }