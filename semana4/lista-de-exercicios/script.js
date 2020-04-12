
//-------------------------------------------exercicios aula14--------------------------------------------------------------------------------

1// temos uma função que recebe um valor numerico de dinheiro e de cotação 
//para poder converter um valor em dolares 

2// uma função que recebe 2 paramentros com uma variavel que guarda o valor final, um switch que ultiplica o valor de acordo com o investimento
// novoMontante terá um resultado de 165 (150 *1.1) e
//o segundoMontante será default já que tesouro direto não tem no switch case

3// temos um array com 14 numeros e dois arrays vazios 
//um for que percorre o array verificando se os numeros tem resto 0 da divisão por 2 
// os que tem são colocados no array1, os outro são colocados no array2 
// (Quantidade total de números 14)
//(6)
//(8)

4// temos um array e 2 variaveis, e um for com 2 if no primeiro if o valor da variavel numero1 será substituida pelo proximo valor mais baixo 
// a variavel numero2 vai substituir quando o valor proximo for mal alto 
//(-10)
//(1590)

//                                    exercicio de logica de programacao 

//1
//a. false
//b. true
//c. true
//d. true
//e. true

//2 
// é necessario uma função para colocar um valor a variavel e um incremento ao indice i para não atingir a condição do while
// function quantidadeDeNumerosPares(numero) {
// let i = 0
// while(i <= numero) {
//   console.log(i*2)

//   i++
// }
// }

//3 
// const trianguloTipo = (a, b, c) => {
//   if(a === b && b === c){
//     return "Equilátero"
//   }else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && c !== a)){
//     return "Isósceles"
//   }else {
//     return "Escaleno"
//   }
// }

//4
// const doisNumeros = (a, b) => {
//   resultado = ( a - b )


//   if (a > b && a % b === 0 && a - b >= 0 ){
//     console.log("O maior numero é " + a ) 
//     console.log(a +" é divisível por "+ b)
//     console.log("A diferença entre eles é " + resultado)
//   }
//   else if (a > b && a % b === 0 && a - b < 0 ){
//     console.log("O maior numero é " + a ) 
//     console.log(a +" é divisível por "+ b)
//     console.log("A diferença entre eles é " + (resultado * -1))
//   }
//   else if (a > b && a % b !== 0 && a - b >= 0 ){
//     console.log("O maior numero é " + a ) 
//     console.log(a +" não é divisível por "+ b)
//     console.log("A diferença entre eles é " + resultado)
//   }
//   else if (a > b && a % b !== 0 && a - b < 0 ){
//     console.log("O maior numero é " + a ) 
//     console.log(a +" não é divisível por "+ b)
//     console.log("A diferença entre eles é " + (resultado * -1))
//   }
//   else if (a < b && a % b === 0 && a - b >= 0 ){
//     console.log("O maior numero é " + b ) 
//     console.log(a +" é divisível por "+ b)
//     console.log("A diferença entre eles é " + resultado)
//   }
//   else if (a < b && a % b === 0 && a - b < 0 ){
//     console.log("O maior numero é " + b ) 
//     console.log(a +" é divisível por "+ b)
//     console.log("A diferença entre eles é " + (resultado * -1))
//   }
//   else if (a < b && a % b !== 0 && a - b >= 0 ){
//     console.log("O maior numero é " + b ) 
//     console.log(a +" não é divisível por "+ b)
//     console.log("A diferença entre eles é " + resultado)
//   }
//   else if (a < b && a % b !== 0 && a - b < 0 ){
//     console.log("O maior numero é " + b ) 
//     console.log(a +" não é divisível por "+ b)
//     console.log("A diferença entre eles é " + (resultado * -1))
//   }

//----------------------------- exercicios de funcao -------------------------------------------//

//1 
// const segundoMaiorSegundoMenor = (array) =>{
//   let maior = 0 
//   let menor = Infinity
//   let segundoMaior = menor
//   let segundoMenor = menor

//   for(let numero of array){
//     if(numero > maior ){
//       maior = numero;
//     }
//     if(numero < menor){
//       menor = numero
//     }
//   }
//   console.log(maior)
//   console.log(menor)
// }


//2
// let olaFuture = function (){
//   return alert("Hello Future4")
// }

// ----------------------------- exercicio de objetos -----------------------------------------------//

//1 Array quando precisamos de um uma variavel normalmente de um unico tipo para ajudar a busca e manutenção do array
//Objeto guarda mais de um tipo de variavel que é a base do paradigma de Orientação de Objeto que mostrara ser essencial

//2 
// const criaRetangulo = (lado1, lado2) => {

//   const retangulo = {
//     largura: lado1,
//     altura: lado2,
//     perimetro: 2 * (lado1 + lado2),
//     area: (lado1 * lado2)
//   }

//   return retangulo
// }