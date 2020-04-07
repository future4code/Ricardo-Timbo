
// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }

// console.log(minhaFuncao(8))
//a. 
//minhaFuncao(2) aqui o for de i percorreu apenas uma vez assim o i e o j que valiam 0 assim j era igual a j e não houve push
//pois na volta ao primeiro for o i já tinha o mesmo valor que quantidade

//b.
//minhaFuncao(5) - aqui quando o i vale 2 o ssegundo for inseri duas vez o incremento colocando 0 e 1 nos indices 0 e 1
//quando o j se torna igual a i com valor 2 voltamos para o primeiro for agora i vale 4 o for de 0 é zerado e incrementado até 3 (depois disso quando j fica com valor 4 j= i )
// no segundo loop faremos o push de 0, 1, 2 nas posições de indice[2, 3, 4, 5] ao fim o array fica [0, 1, 0, 1, 2, 3]

//c.
//minhaFuncao (8) - o mesmo se repete porém o primeiro for roda 4 vezes, fazendo com que o segundo faça 12 push

// ----------------------------  2  ----------------------------------------------------------------------------//
// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));

// console.log(funcao(arrayDeNomes, "Darvas")) - neste trexo usamos uma compraração dos indices do arrayDeNomes
// e do indice i como asmbos são iguais retornou o i posição 0 

// console.log(funcao(arrayDeNomes, "João")) - aqui o for vai ate a posição 2 do array que é onde está posição "João"
//e retorna a posição de João que é igual a i (2)

//console.log(funcao(arrayDeNomes, "Paula")) - temos um erro pq ele não acha "Paula" no arrayDeNomes só temos Paulinha

// ------------------------------------------ 3-------------------------------------------------------//
// function metodo(array) {
//   let resultadoA = 0;
//   let resultadoB = 1;
//   let arrayFinal = [];

//   for (let x of array) {
//     resultadoA += x;
//     resultadoB *= x;
//   }

//   arrayFinal.push(resultadoA);
//   arrayFinal.push(resultadoB);
//   return arrayFinal;
// }

// console.log(metodo([1, 2, 3, 4, 5]))

// a função cria duas variaveis para somar e para dividir, no for o x é o indice que corre o array o x vai somando os valores e mutiplicando entre si
// fiz com o array [1,2,3,4,5], ele retornou o resultado da soma como 15 e o resultado da multiplicação 120 
//o nome do array poderia ser somaProduto 

//--------------------------------------------- 4 ------------------------------------------------------//
//a.
// const calculaIdadeCao = (anosHumanos) => {
//   const idadeCao = anosHumanos* 7
//   return idadeCao
// }

// console.log(calculaIdadeCao (4))

//b.
// const pessoa  = (nome, idade, endereco, estudante) => {
//   const pessoaId = "Eu sou "+ nome + ", tenho " + idade + " anos, moro em " + endereco + " e "+ estudante + " estudante"
//   return pessoaId
// }

// console.log(pessoa ("Goli", 23, "Rua Guararapi 190", true))

// ---------------------------------------------- 5 ----------------------------------------------------//
//   const anoParaSeculo = (ano) =>{
//     let seculo = parseInt(ano /100)
//     let letras = ["M",  "CM",  "D",  "CD", "C",  "XC", "L",  "XL",  "X",  "IX", "V",  "IV", "I"]
//     let numeros = [1000,  900,  500,  400,  100,   90,  50,   40,   10,    9,    5,    4,    1]
//     let convertido=""
//     let i=0
//     while(seculo > 0){
//         if(seculo>=numeros[i]){
//             convertido+=letras[i]
//             seculo-=numeros[i]
//         }
//         else{
//             i++
//         }
//     }
//     return ("O ano "+ ano + " pertence ao século " + convertido )
//   }

// console.log(anoParaSeculo(1965))


//-------------------------------------------------- 6 -------------------------------------------------//
 const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//a.
 // const minhaFuncao = (array) => {
//   return array.length
// }
// console.log(minhaFuncao(array))

//b.
// const numeroPar = (numero) => {
//   if(numero % 2 === 0){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(numeroPar(9))

//c. 
// const arrayPar = (array) => {
//   let novoArrayPar = []

//   for(let x of array) {
//     if(x % 2 === 0){
//       return novoArrayPar.push
//     }
//   }
//   return novoArrayPar
// }
// console.log(arrayPar())
