//1.
// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i
// }
// console.log(sum)
// a cada inteiração o i tem uma incremento que é somado ao sum 
//esse que no fim sum = 150, ele é somado com o que já tem.

//2. ___________________________________________________________
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 4
// for(const item of lista){
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)
//a. 
//O comando push inseri os itens na nova lista, diviziveis por 5(com resto 0)
//------------------------------------------------------------
//b.
//os itens que são divisiveis por 5 ( com o resto 0)
//------------------------------------------------------------
//c.
// divisiveis por 3 - [12, 15, 18, 21, 27, 30],
// divisiveis por 4 - [12]

//3.______________________________________________________________
//a.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = array[0]
// let menor= array[0]

// for(let elemento of array){
//     if (elemento > maior){
//         maior = elemento
//     }else if(elemento < menor){
//       menor = elemento
//     }
// }
// console.log("O maior número é "+ maior + " e o menor é " + menor)

//b.

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novaLista = []
// const numero = 10
// for(const item of array){

//  novaLista.push(item/numero)

// }
// console.log(novaLista)

//c.

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novaLista = []
// const numero = 2
// for(const item of array){
//   if(item%numero === 0){
//   novaLista.push(item)
//   }
// }
// console.log(novaLista)

//d.

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novaLista = []
// let valor = 0
// for(let i=0; i<array.length; i++){
//   valor =  array[i]
//   novaLista.push("O elemento do índex "+ i +" é "+ valor )
// }
// console.log(novaLista)

//----------------------- DESAFIOS ------------------------------//

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}