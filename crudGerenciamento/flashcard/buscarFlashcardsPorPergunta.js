const { flashcards } = require("../data")

function buscarPorPergunta(pergunta){
    index = flashcards.filter(flashcard => flashcard.pergunta === pergunta)

    index.forEach(elemento => {
        console.log(`
        ID: ${elemento.id} -Pergunta: ${elemento.pergunta} -Resposta: ${elemento.resposta}
        `)
    });

}
module.exports = { buscarPorPergunta }