const { flashcards } = require("../data");

function listarFlashcards(){
    flashcards.forEach(flashcard => {
        console.log(`ID: ${flashcard.id}, pergunta: ${flashcard.pergunta}, resposta: ${flashcard.pergunta}, ID Baralho: ${flashcard.idBaralho}`)
    })    
}
module.exports = { listarFlashcards }