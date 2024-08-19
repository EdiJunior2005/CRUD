const { processamentoRequisicao } = require("./server");

function solicitarAdicao(nome, telefones, email){
    const requisicao = {acao: 'ADICIONAR', nome, telefones, email}
    const respostaServidor = processamentoRequisicao(requisicao)
    console.log('Resposta do servidor', respostaServidor)
}
function solicitarListagem(){
    const requisicao = {acao: 'LISTAR'}
    const respostaServidor = processamentoRequisicao(requisicao)
    console.log('Resposta do servidor: ', respostaServidor)
}
solicitarAdicao('Edi', 42988141221, 'edi@gmail.com')
solicitarListagem()