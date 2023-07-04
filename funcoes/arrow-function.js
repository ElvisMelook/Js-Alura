
function apresentar (nome){
   return `Olá meu nome é ${nome}`
}



const  apresentarArrow = nome => `Olá meu nome é ${nome}`

const soma = (num1, num2) => `num1 + num2`

// arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10  || num2 > 10){

        return "somente números de 1 a 10"
    }else{
        return num1 + num2;
    }

}
console.log(somaNumerosPequenos(2 ,8))
