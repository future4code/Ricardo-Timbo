// const num1 = Number(prompt("Digite um numero"))
// const num2 = Number(prompt("digite outro numero"))
// let comparacao = num1 === num2
// if(comparacao){
//     console.log("o primeiro numero é igual ao segundo")
// }
// else if(num1<num2){
//     console.log("O primeiro numero é menor que o segundo")
// }
// else{
//     console.log("O primeiro numero é maior que o segundo")
// }


// let condicao = true

// if (condicao) {
//     console.log("Entrei no if 1")
// }

// condicao = false

// if (!condicao){
//     console.log("Entrei no if 2")
// }

// let condicao = false 
// if (condicao){
//     console.log("entrei no if")
// }
// else{
//     console.log("entrei no else")
// }

// const concluiuEM = prompt("você concluiu o Ensino Medio ? [s/n]")
// const idade = Number(prompt("Qual a sua idade?"))
// const outraFaculdade = prompt("Você está cursando outra faculdade? [s/n]")

// if (concluiuEM === "s" && idade>=18 && outraFaculdade ==="n"){
//     console.log("aprovado!")
// }
// else {
//     console.log("reprovado!")
// }

// let condicao

// if(condicao{
//     let minhaVariavel =1
// }

// minhaVariavel+=10
// console.log(minhaVariavel)


//1.

// ------ nesse codigo é um teste de numeros pares--------
//apenas os numeros que tem resto 0 na divisão por 2 passam no teste



//2. 

//a - um codigo para preço de frutas
//b - O preço da fruta Maçã é R$ 2.25
//c - R$24.55
//d - seguria o codigo e imprimi o ultimo valor proximo do break a Pêra teria um preço de 5


//3.

// a mensagem seria Número 1 é menor ou igual ao 2!

//4. 
//a.
// const numero1 = Number (prompt("Digite o primeiro número."))
// const numero2 = Number (prompt("Digite o segundo número"))

// if (numero1>numero2){
//     console.log("Ordem decescente : ", numero1, numero2)
// }
// else{
//     console.log("Ordem decescente : ", numero2, numero1)
// }
// ele imprime o primeiro pois foi a ordem digitada e imprime os 2 numeros 2 vezes


//b.
const numero1 = Number (prompt("Digite o primeiro número."))
const numero2 = Number (prompt("Digite o segundo número"))
const numero3 = Number (prompt("Digite o terceiro número"))

if (numero1>numero2 && numero2>numero3 && numero1>numero3){
    console.log(numero1, numero2, numero3)
}else if(numero1>numero2 && numero3>numero2 && numero1>numero3){
    console.log(numero1,numero3, numero2)
}else if(numero2>numero1 && numero1>numero3 && numero2>numero3){
    console.log(numero2,numero1, numero3)
}else if(numero2>numero1 && numero1<numero3 && numero2>numero3){
    console.log(numero2, numero3,numero1)
}else if (numero3>numero1 && numero1>numero2 && numero3>numero2){
    console.log(numero3, numero1, numero2)
}else if(numero3>numero2 && numero2>numero1 && numero3>numero1){
    console.log(numero3,numero2,numero1)
}