const { flashcards } = require("../data")

function deletarFlashcard(id){
    let index = flashcards.findIndex(flashcard => flashcard.id === id)
    if(index !== -1){
        flashcards.splice(index,1)
        console.log('removido com sucesso!!!')
    }else{
        console.error('ID errado!!')
    }
}
module.exports = { deletarFlashcard }