

const nomeCliente = "José"

function cumprimetar() {
    return "OI, seja bem vindo!" ;

}

function QuemCumprimenta(nome, idade) {

    return `Meu nome é ${nome} e tenho ${idade} anos.`;

}

function cliente(nome) {
    return `Olá meu nome é ${nome}`;
}


console.log(cumprimetar(), QuemCumprimenta('Elvis', 23))
console.log(cliente(nomeCliente))