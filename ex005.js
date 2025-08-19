// verificar se vota ou não vota no Brasil
let idade = 71

if (idade < 16){
    console.log(`não vota!`)
}else if (idade < 18 || idade > 70){
    console.log(`voto opcional`)
}else{
    console.log(`voto obrigatório`)
}