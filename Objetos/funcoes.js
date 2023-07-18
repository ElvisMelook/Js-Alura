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
    },
    {
        nome: 'Jair Lima',
        cpf: '228040344234',
        parentesco: 'filho',
        nascimento: '04/02/2023'
    }
    ],
    saldo: 100,
    depositar: function(valorDoDeposito){
        this.saldo += valorDoDeposito       // this.saldo = this.saldo + valorDoDeposito      (outra maneira)
    },
    sacar: function(valorDoSaque){
      this.saldo -= valorDoSaque  
    }
}

console.log(cliente.saldo)

cliente.depositar(30)
cliente.sacar(40)          

console.log(cliente.saldo)