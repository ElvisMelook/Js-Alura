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

function oferecerSeguro(obj){

    const propsClietes = Object.keys(obj);

    if( propsClietes.includes("dependente")){
        console.log( `Oferta de seguro para ${obj.nome}`);
    }


}

console.log(Object.entries(cliente)[1][1]); //forma de trasformar obj em arrey
oferecerSeguro(cliente);