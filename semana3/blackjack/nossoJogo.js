/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
const carta = comprarCarta();
const carta2 = comprarCarta();
const carta3 = comprarCarta();
const carta4 = comprarCarta();
const pontoUsuario = Number (carta.valor + carta3.valor)
const pontoComputador = Number(carta2.valor + carta4.valor)

if(confirm("Quer iniciar uma nova rodada?")) {

  console.log("Usuário - cartas: " + carta.texto + " " + carta3.texto + " - pontuação " + pontoUsuario)
  console.log("Computador - cartas: " + carta2.texto + " " + carta4.texto + " - pontuação " + pontoComputador)
  if(pontoUsuario > pontoComputador && pontoUsuario <=21){
    console.log("O usuário ganhou!")
  }else if(pontoComputador > pontoUsuario && pontoComputador <=21){
    console.log("O computador ganhou!")
  }else if (pontoUsuario === pontoComputador){
    console.log("Empate!")
  }else if (pontoUsuario > pontoComputador && pontoUsuario > 21){
    console.log("O computador ganhou!")
  }else if (ontoComputador > pontoUsuario && pontoComputador > 21){
    console.log("O usuário ganhou!")
  }else {
    console.log("Empate!")
  }


} else {
	console.log("O jogo acabou")
}
