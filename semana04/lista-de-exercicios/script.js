
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

//1 Array quando precisamos de um uma variavel normalmente de um unico tipo para ajudar a busca e manutenção do array. array é ordenado(a possibilidade de um array de objeto)
//Objeto guarda mais de um tipo de variavel que é a base do paradigma de Orientação de Objeto que mostrara ser essencial. tem lista mas não ordenado (uma das caracteristicas do o objeto pode ser um array)
// a forma de acessalos é muito diferente o array é por indice o array por propiedade

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

//3
// const filme = {
//   titulo: "Parasita",
//   ano: 2019,
//   diretor: "Bong Joon-ho",
//   elenco: ["Cho Yeo-jeong","Choi Woo-shik","Jung Hyun-joon"]
// }

// console.log("Venha assistir ao filme " + filme.titulo +", de "+ filme.ano +", dirigido por "+ filme.diretor +" e estrelado por " + filme.elenco[0] +", "+filme.elenco[1] + ", " +filme.elenco[2])

//4 
// const pessoa = {
//   nome: "",
//   idade: 0,
//   email: "",
//   endereco: ""
// }

// function anonimizarPessoa (nome, idade, email, endereco) {
  
//   const pessoa = {
//     nome: nome,
//     idade: idade,
//     email: email,
//     endereco: endereco
//   }

//   pessoa.nome = "ANÔNIMO"
//   console.log(pessoa)
  
// }

//--------------------------------------- Função de Array ------------------------------------------------------------// 

//1
// com um for of criando uma variavel , com um indice perccorendo o array sendo incrementado e com um while

//2
//a. utilizar o filter para as idades
//b.

//3 
