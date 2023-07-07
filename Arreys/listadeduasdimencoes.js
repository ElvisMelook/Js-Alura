

const alunos = ['joao', 'Marta', "Filipe"]
const notas = [10, 3, 4]
console.log(alunos.indexOf("Marta"))
console.log(alunos.includes("joao")) // retorna 1, pois existe o nome no arrey. Se não -1

let listaDenotasDosAlunos = [alunos, notas]



const exibeNomeNota = (nomeDoAluno) =>{
    if(listaDenotasDosAlunos[0].includes(nomeDoAluno)){
        let index = listaDenotasDosAlunos[0].indexOf(nomeDoAluno)

        return listaDenotasDosAlunos[0][index] + ", sua nota é " + listaDenotasDosAlunos[1][index]
    }else{
        console.log(`Aluno não consta.`)
    }
}

console.log(exibeNomeNota("joao"))
//EXEMPLO À BAIXO
























// const mostraNota = (nomeDoAluno) => {

//     if (listaDenotasDosAlunos[0].includes(nomeDoAluno)) {
//         let index = listaDenotasDosAlunos[0].indexOf(nomeDoAluno)

//         return listaDenotasDosAlunos[0][index] + ", sua média é " + listaDenotasDosAlunos[1][index]
//     }else{
//         return "Aluno não está cadastrado"
//     }
// }

// console.log(mostraNota('Marta'))

