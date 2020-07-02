const bool1 = true
const bool2 = false
const bool3 = !bool2
/* criada as variaveis com seus valores booleanos
 a prim eira variavel tem valor TRUE
a segunda tem valor FALSE
a terceira tem um (not)bool2 - bot false logo é um TRUE*/

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
/*a operecção de && exige que todas sejam atendidas 
como a bool2 e FALSE o resultado e FALSE */

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
/*no inicio  false OU true como uma das condições foi atendida o resultado e TRUE
TRUE && FALSE - como o ! indica o contrario agora o bool3 e flase
resultado - FALSE*/

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
/* como RESULTADO ainda não tem um valor o valor será de (TRUE ou TRUE)
resultado TRUE.
(obs caso chamdo mais uma vez seria false pois a negação do resultado, uma terceira vez seria true novamente )*/

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
/*bool1 ou bool2 - True
not do bool3 é false 
true && false - resultado é false*/

console.log("e. ", typeof resultado)
/* resultado é um boolean já que tem valores de true e false*/

// -----------------------------------------------------------------------------------------------------------------------------
let array
console.log('I. ', array)
// valor retornado será underfined pois não foi atribuido nenhum valor ao array
array = null
console.log('II. ', array)
// o resultado e Null nulo, um valor explicito 

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
// o length vai retornar a quantidade de dentro do array
let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
// o i é referente ao indice do array logo apos foi chamado o indice com o encremento de mais 1
array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
//o sinal de "=" atribuiu ao indice +1 o valor de 19
//a variavel valor recebeu o valor indice+6 que foi para a posição 6 do indice que tem valor 9
i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
// i+ 1 levou para o indice 1 porém i-1 retornou para o indice 0 
i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
//array.length - 1 = 10
// array [i] = array [10] = array[10-3]
//array[7] % array[1]
//10/3 resto 1

//a. Array e um conjunto de variaveis alocadas, n JavaScript são chamadas como uma variavel o tipo let ou const
// nome (exemmplo meuArray) o sinal de igual(=) para atribuir os valores do array e [ ] para indicar os valores e indices

//*b. o index inicial de um array é 0 

// pela quantidade de itens no [] 

//d. 
//__________________________________________________________________________________________________________________________


//a.
let termometro1 = (77 - 32)*5/9 + 273.15
console.log("77 °F é igual a " + termometro1 + " K")
//b.
let termometro2 = (80)*9/5 + 32
console.log("80 °C é igual a " + termometro2 + " °F")
//c. 
let termometro3 = (30)*9/5 + 32
let termometro4 = (30)+273.15 
console.log("30 °C é igual a " + termometro3 + " °F e " + termometro4 + " K" )

//___________________________________________________________________________________________________________________________

const nome = prompt("Qual o seu nome?")
console.log("Resposta: " + nome)
const idade = prompt("qual a sua idade")
console.log("Resposta: " + idade )
const game = prompt("Qual o seu jogo preferido")
console.log("Resposta: " + game )
const estado = prompt("Qual o estado que vc mora?")
console.log("Resposta: " + estado)
const mora = prompt("Você mora em casa ou apartamento")
console.log("Resposta: " + mora)

//___________________________________________________________________________________________________________________________

let consumo = prompt("Qual a quantidade de Quilowatt consumido?")
consumo= consumo*0.05
console.log("O seu consumo total é de R$"+ consumo)

let desconto = prompt("Qual a porcentagem de desconto?")
consumo = consumo - (consumo*(desconto/100))
console.log("O seu consumo total com desconto de "+ desconto + "% é de R$"+ consumo)
//a.
consumoA = 280*0.05
console.log("o Valor a ser pago por 280 Quilowatt-hora é de "+ consumoA)

//b.
let desconto = 15
consumo = consumo - (consumo*(desconto/100))
console.log("O seu consumo total com desconto de "+ desconto + "% é de R$"+ consumo)




 

