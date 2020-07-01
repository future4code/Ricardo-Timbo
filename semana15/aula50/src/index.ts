//1 
//a) todas as propiedades, todos os atributos da interface são estão padrão 

//2
//a) não é possivel declarar CEP q ele é do tipo protected, maximo possivel é buscar uma instancia que tenha com o get

import {Client} from "./Client"
import {Place} from "./Place"

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

console.log("Nome: ", client.name)
console.log("Id: ", client.registrationNumber)
console.log("Consumo: ", client.consumedEnergy)
console.log("Calculo: ", client.calculateBill())

const lugar: Place = {
    cep: "22222222"
}