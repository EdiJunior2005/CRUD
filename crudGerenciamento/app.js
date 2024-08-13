const baralhos = require('./data')
const flashcards = require('./data')
const { criarBaralho } = require('./baralho/criarBaralho.js')
const { listarBaralho } = require('./baralho/listarBaralho.js')
const { atualizarBaralho } = require('./baralho/atualizarBaralho.js')
const { deletarBaralho } = require('./baralho/deletarBaralho.js')
const { criarFlashcard } = require('./flashcard/criarFlashcard.js')
const { listarFlashcards } = require('./flashcard/listarFlashcards.js')
const { listarPorID } = require('./flashcard/listarFlashcardsPorBaralhoId.js')
const { atualizarFlashcard } = require('./flashcard/atualizarFlashcard.js')
const { deletarFlashcard } = require('./flashcard/deletarFlashcard.js')
const { buscarPorPergunta } = require('./flashcard/buscarFlashcardsPorPergunta.js')
const prompt = require('prompt-sync')()
menu()
function menu(){
    console.log(`
    1. Criar Baralho
    2. Criar Flashcard
    3. Listar Baralhos
    4. Listar Flashcards
    5. Listar Flashcards por Baralho
    6. Atualizar Baralho
    7. Atualizar Flashcard
    8. Deletar Baralho
    9. Deletar Flashcard
    10. Buscar Flashcards por Pergunta
    0. Sair
    `)
    let index
    let id
    index = prompt('Qual das opções a cima voce deseja executar: ')
    switch(index){
        case '1':
            let titulo = prompt('Digite o titulo do baralho: ')
            if (titulo == null){
                console.error('Insira um titulo valido!!')
                return menu()
            }else{
                criarBaralho({titulo})
                console.log('criado com sucesso!!')
                menu()
            }
        break
        case '2': 
            let pergunta = prompt('Digite a pergunta: ')
            let resposta = prompt('Digite a resposta: ')
            let idBaralho = prompt('Qual o ID do baralho: ')
            let inserirFlashcards = {pergunta,resposta,idBaralho}
            criarFlashcard(inserirFlashcards)
            menu()
        break
        case '3': 
            listarBaralho()
            menu()
        break
        case '4': 
            listarFlashcards()
            menu()
        break
        case '5': 
            id = parseInt(prompt('Qual o id do baralho: '))
            listarPorID(id)
            menu()
        break
        case '6': 
            id = parseInt(prompt('Qual baralho voce deseja editar: (id): '))
            let novoNomeBaralho = prompt('Digite o novo nome do baralho: ')
            atualizarBaralho(id, {titulo: novoNomeBaralho})
            menu()
        break
        case '7': 
            id = parseInt(prompt('Qual flash card voce deseja atualizar: '))
            let novaPergunta = prompt('Digite a pergunta: ')
            let novaResposta = prompt('Digite a resposta: ')
            let novoIdBaralho = prompt('Qual o ID do baralho: ')
            let novoFlashcards = {pergunta: novaPergunta, resposta: novaResposta, idBaralho: novoIdBaralho}
            atualizarFlashcard(id, novoFlashcards)
            menu()
        break
        case '8': 
            id = parseInt(prompt('Qual baralho voce deseja deletar? (id): ')) 
            deletarBaralho(id)
            menu()
        break
        case '9': 
            id = parseInt(prompt('Qual o id do flashcard: '))
            deletarFlashcard(id)
            menu()
        break
        case '10': 
            index = prompt('Qual a pergunta voce deseja buscar? (escreva detalhadamente igual!!)')
            buscarPorPergunta(index)
            menu()
        break
        case '0': 
        return console.log('saindo')
        default:
            console.log('opção invalida!!!')
            menu()
    }
}