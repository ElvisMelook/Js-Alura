const salaJAVA = [ 1, 3,4 ,5, 6]
const JavaScript= [2,3,4,5,6]
const salaPayton = [ 3,4,5,6,5]

function mediaSala(notaSala){
    const somaDasNotas = notaSala.reduce((acumulador,atual)=> atual +acumulador,0)
    return somaDasNotas/notaSala.length

}

console.log(mediaSala(salaJAVA))
console.log(mediaSala(JavaScript))
console.log(mediaSala(salaPayton))

const notas = [10,10,9]


    const media = notas.reduce((acumulador,atual)=> acumulador + atual,0) / notas.length;
    console.log(media)

    