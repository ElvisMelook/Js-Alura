

let numero = [1,2,3,4,5,6,7,8,9]

function multiplicaPorDez (num){
    
    return num * 10

}

    let multiplicaPorDois = (e)=>{

        return e * 2

    }

    let multiplicaPorCem = numero.map((num)=>{
        return num * 100
    })

    console.log(multiplicaPorCem)
    console.log(numero.map(multiplicaPorDois))
    console.log(numero.map(multiplicaPorDez))
    

    

    