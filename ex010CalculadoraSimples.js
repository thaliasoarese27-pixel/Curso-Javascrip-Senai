//Crie um programa que receba dois números (n1 e n2) e um operador (+, -, *, /). 
//Calcule e exiba o resultado de acordo com o operador informado. 
//Caso seja divisão, verifique se o divisor não é zero.

let n1 = 10
let n2 = 5
let operador = ""

if (operador == "*"){
    let result = n1 * n2
    console.log(`${n1} * ${n2} == ${result}`)
} else if  (operador == "+"){
    let result = n1 + n2
    console.log(`${n1} + ${n2} == ${result}`)
}else if (operador == "-"){
       let result = n1 - n2
    console.log(`${n1} + ${n2} == ${result}`)
}else if (operador == "/"){
     let result = n1 / n2
    console.log(`${n1} / ${n2} == ${result}`)
}else{
    console.log(`operador invalido`)
}