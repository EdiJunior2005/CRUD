const { inserir } = require("./inserir");
const { remover } = require("./remover");
const { editar } = require("./editar");
const { listarContatos } = require("./listar");
let contatos = require("./usuraios");

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
            let contato = {
                nome: prompt("Digite seu nome: "),
                telefone: prompt("Digite seu telefone: "),
                email: prompt("Digite seu email: ")
            }
            inserir(contato);
            menu();
            break;
        case "2":
            listarContatos();

            if (contatos.length == null) {
                console.log("Não ha nada para editar!");
                menu();
            } else {
                id = parseInt(prompt("Qual das opções voce deseja editar: "))
                    nome = prompt("Digite o novo nome: ");
                    telefone = prompt("Digite o novo telefone: ");
                    email = prompt("Digite o novo telefone: ");
                    var novoContato = {
                        nome,
                        telefone: parseInt(telefone),
                        email,
                    };
                    editar(id, novoContato);
                    console.log("Editado com sucesso!!");
                    menu();
                    return menu();
                }
            break;
        case "3":
            listarContatos();

            if (contatos == null) {
                console.log("nao existe contatos para serem removidos!");
                menu();
            } else {
                id = parseInt(prompt("Qual das opções voce deseja editar: "));
                remover(id);
                menu();
            }
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
