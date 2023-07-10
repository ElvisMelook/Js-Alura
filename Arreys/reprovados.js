const nomes = ['Ana','Marcos','Maria','João']
const notas = [ 9, 4, 5, 6, ]


const reprovados = nomes.filter((alunos, indice)=> notas[indice] <5);


console.log(reprovados)


