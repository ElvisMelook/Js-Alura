const cliente = {
    nome: "João",
    idade: 36,
    profissao: "pedreiro",
    cpf: "1123213233",
    fones: ['22321312323', "123123123"],
    dependente: [{
        nome: 'Maria Joana Lima',
        cpf: '59485040504297',
        parentesco: 'filha',
        nascimento: '20/02/2021'
    }]
}

cliente.dependente.push({
    nome:'Jair Lima',
    cpf:'228040344234',
    parentesco: 'filho',
    nascimento: '04/02/2023'
})



// console.log(cliente)

const filhaMaisNova = cliente.dependente.filter((dependente => dependente.nascimento === '04/02/2023'))

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)