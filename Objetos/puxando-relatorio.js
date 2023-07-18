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
        this.saldo += valorDoDeposito       
    },
    sacar: function(valorDoSaque){
      this.saldo -= valorDoSaque  
    }
}

let relatorio = "";

for (let info in cliente){
    if(typeof cliente[info] ==="object" || typeof cliente[info] === "function"){

        continue
    }else{

        relatorio += ` 
        ${info}: ${cliente[info]}`;
    }
}
console.log(relatorio)
