const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0; // valor d

notas.forEach(cadaNota => {
    somaDasNotas += cadaNota;  //percorre cada elemento dento de notas (cadaNota)
});



function multiplicaPorDois(e){
    return e * 10
}
const result = notas.map(multiplicaPorDois);
const media = somaDasNotas / notas.length;

console.log(result)
console.log(media)
 console.log (media)