
const cliente = {
    nome: "João",
    idade: 36,
    profissao: "pedreiro",
    cpf: "1123213233"
}

const chavesDoCliente = ["nome", "idade", "profissao", "cpf"]


// console.log(cliente[chavesDoCliente[0]])
// console.log(cliente[chavesDoCliente[1]])
// console.log(cliente[chavesDoCliente[2]])
// console.log(cliente[chavesDoCliente[3]].substring(0,4))

chavesDoCliente.forEach((info) => console.log(cliente[info]))//percorrendo todo o arrey 