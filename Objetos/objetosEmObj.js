//Exemplo de Objeto dentro de Objeto
const cliente = {
    nome: "João",
    idade: 36,
    profissao: "pedreiro",
    cpf: "1123213233",
    fones: ['22321312323',"123123123"]
}

cliente.dependente = {
    nome: 'Maria',
    idade: 3,
    cpf: '59485040504297'
}

cliente.dependente.nome = 'Maria Joaquina da Silva'//Acessando e alterando nome do objto. 

console.log(cliente.dependente)
