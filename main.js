const { inserir } = require("./inserir");
const { remover } = require("./remover");
const { editar } = require("./editar");
const { listarContatos } = require("./listar");
let contatos = require("./usuarios");

const prompt = require("prompt-sync")();

menu();
function menu() {
    console.log(`
    1. Inserir
    2. Editar
    3. Remover
    4. Listar
    5 Sair
`);
    let index
    index = prompt('O que voce deseja fazer: ')
    switch (index) {
        case "1":
            let telefones = []
            let telefone
            let nome = prompt("Digite seu nome: ")
            while((telefone = prompt("Digite seu telefone ou deixe em branco para continuar: "))){
                telefones.push(telefone)
            }
            let email = prompt('Digite seu email: ')
            inserir({nome, telefones, email });
            menu();
            break;
        case "2":
            listarContatos();

                id = parseInt(prompt("Qual das opções voce deseja editar: "))
                let novoNome = prompt("Digite o novo nome: ");
                let novoTelefones = []
                let novoTelefone
                while((novoTelefone= prompt("Digite o novo telefone ou enter para continuar a edição: "))){
                    novoTelefones.push(novoTelefone)
                }
                let novoEmail = prompt("Digite o novo email: ")
                editar(id, {nome: novoNome, telefones: novoTelefones, email: novoEmail });
                console.log("Editado com sucesso!!");
                return menu();
        case "3":
            listarContatos();
                id = parseInt(prompt("Qual das opções voce deseja editar: "));
                remover(id);
                menu();
            break;
        case "4":
            listarContatos();
            menu();
            break;
        case "5":
            return "encerrado";
        default:
            console.log("Opção invalida, digite de novo: ");
            menu();
    }
}
