const { flashcards } = require("../data");

function listarPorID(idBaralho){
    let filtro = flashcards.filter(verificar => verificar.id == idBaralho)

        filtro.forEach(flashcard => 
            console.log(`
            ID: ${flashcard.id} -Pergunta: ${flashcard.pergunta} -Resposta: ${flashcard.resposta}
            `)
        )
}
module.exports = { listarPorID }

