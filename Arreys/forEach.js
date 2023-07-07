const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0; // valor d

notas.forEach(cadaNota => {
    somaDasNotas += cadaNota;  //percorre cada elemento dento de notas (cadaNota)
});

const media = somaDasNotas / notas.length;

console.log(media)