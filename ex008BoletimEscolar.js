// Boletim Escolar Nota entre 50 e 69 = recuperaçãpo
// Nota Menor que 50 = reprovado
// Nota maior que 70 = Aprovado

let notaAluno = 49

if (notaAluno >= 70){
    console.log(` nota do aluno foi ${notaAluno}, ele está aprovado`)
}else if (notaAluno >=50){
    console.log( `nota do aluno foi ${notaAluno}, ele está recuperação`)
}else{(notaAluno< 50)
    console.log(` nota do aluno foi ${notaAluno}, ele está reprovado`)
}