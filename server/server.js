const dados = [
    { id: 1, nome: 'Alice', telefones: ['1234-5678'], email:
    'alice@example.com' },
    { id: 2, nome: 'Bob', telefones: ['8765-4321'], email:
    'bob@example.com' },
    { id: 3, nome: 'Carol', telefones: ['5678-1234','154685163'], email:
    'carol@example.com' }
    ]; 
function processamentoRequisicao(requisicao){
    const {acao, nome, telefones, email} = requisicao

    switch(acao){
        case 'ADICIONAR':
            const novoUsuario = {id: dados.length + 1, nome, telefones, email}
            dados.push(novoUsuario)
            return { mensagem: 'Adicionado com sucesso', dado: novoUsuario }
        case 'LISTAR':
            return dados 
    }
}
module.exports = { processamentoRequisicao }