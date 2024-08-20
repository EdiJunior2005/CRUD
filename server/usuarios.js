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
function solicitarConsulta(id){
    const requisicao = {acao: 'CONSULTAR', id}
    const respostaServidor = processamentoRequisicao(requisicao)
    console.log('Resposta:', respostaServidor)
}
function solicitarRemocao(id){
    const requisicao = {acao: 'REMOVER', id}
    const respostaServidor = processamentoRequisicao(requisicao)
    console.log('Remoção:', respostaServidor)
}
solicitarAdicao('Edi', 42988141221, 'edi@gmail.com')
solicitarConsulta(1)
solicitarRemocao(1)
solicitarListagem()