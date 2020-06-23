
// A
//const minhaString : string = "minha string"

//const minhaString : string = 2

//colocando um numero no valor de uma variavél string 
//da erro de tipo, diz que a variavel é string e 2 não é do tipo string

// B

// const meuNumero: number | string = "Dois"

//para uma variuavel o tipo number aceitar string podemos usar o pipe e dar dois tipos a variavel ou apenas mudar

// C
// criando um tipo pessoa para que não seja possivel alterar os valores

// type pessoa  = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const ricardo: pessoa ={
//     nome: "Ricardo",
//     idade: 32,
//     corFavorita: "Vermelho"
// }

// D

// type pessoa  = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const antonia: pessoa ={
//     nome: "Antonia",
//     idade: 34,
//     corFavorita: "verde"
// }

// const luana: pessoa = {
//     nome: "Luana",
//     idade: 8,
//     corFavorita: "rosa"
// }

// const luiz: pessoa = {
//     nome: "Luiz Carlos",
//     idade: 70,
//     corFavorita: "azul"
// }

// e

enum ArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil", 
    VIOLETA = "Violeta"
}

type pessoa ={
    nome: string,
    idade: number,
    corFavorita: ArcoIris
}

const luana : pessoa = {
    nome: "Luana",
    idade: 8,
    corFavorita: ArcoIris.AZUL
}

const antonia : pessoa = {
    nome: "Antonia",
    idade: 35,
    corFavorita: ArcoIris.VERDE
}


