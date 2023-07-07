const numeros = [10,9,13,4,5,6]

        // percorrendo elemento com uma cunção e operador ternário 
    const numerosAtualizados = numeros.map( numero => numero >= 10 ? numero = 10 : ++numero)

    console.log(numerosAtualizados)

        // Percorrendo elementos con arrow function e if else.   
    const novaAtualizacaoDeNumeros = numeros.map((numero)=>{
        if(numero >= 10){
            return numero =10 
        }else{
            return 1 + numero
        }

    })

    console.log(novaAtualizacaoDeNumeros)