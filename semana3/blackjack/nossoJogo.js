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
let jogador 
let computador

if(confirm("Quer iniciar uma nova rodada?")) {
   //while(jogador !== 2 carta )

   comprarCarta() 
   
   console.log(carta.texto, carta.valor)

} else {
	console.log("O jogo acabou")
}
