

const nomes = ['João', 'juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan','Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2) // dividiu a lista por 2 e começou do número dividido até o fim do arrey (10 até 20)

console.log(`Alunos da sala 1: ${sala1}`)

console.log(`Alunos da sala 2: ${sala2}`)