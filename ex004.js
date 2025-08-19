// Receber a idade e retornar se é criança ou adulto

let idade = 61

if (idade < 12){
    console.log(`Com ${idade} anos, voce é uma criança!`)
}else if (idade < 17){
    console.log(`Com ${idade} anos, você é um adolescente!`)
}else if (idade < 61) {
    console.log(`Com ${idade} anos, você é um adulto`)
}else {
    console.log(`Com ${idade}anos você é um idoso`)
}