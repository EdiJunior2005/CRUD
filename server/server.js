const dados = [
    { id: 1, nome: 'Alice', telefones: ['1234-5678'], email:
    'alice@example.com' },
    { id: 2, nome: 'Bob', telefones: ['8765-4321'], email:
    'bob@example.com' },
    { id: 3, nome: 'Carol', telefones: ['5678-1234','154685163'], email:
    'carol@example.com' }
    ]; 
function processamentoRequisicao(requisicao){
    const {acao, nome, telefones, email, id} = requisicao

    switch(acao){
        case 'CONSULTAR':
            return dados.find(d => d.id === id) || { mensagem: 'nao encontrado' }
        case 'ADICIONAR':
            const novoUsuario = {id: dados.length + 1, nome, telefones, email}
            dados.push(novoUsuario)
            return { mensagem: 'Adicionado com sucesso', dado: novoUsuario }
        case 'LISTAR':
            return dados 
        case 'REMOVER':
            const filtro = dados.filter(d => d.id === id) || { mensagem: 'id invalido' };
            return dados.splice(filtro, 1)
    }
        
}
module.exports = { processamentoRequisicao }