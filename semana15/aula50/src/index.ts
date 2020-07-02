//1 
//a) todas as propiedades, todos os atributos da interface são estão padrão 

//2
//a) não é possivel instanciar uma classe abstrata
//b) e necessario ter uma classe concreta que seja filha da Place

//3

//4 
//a todas as da interface e da classe Pai

//5 
// a) 
// b)


import {Client} from "./Client"
import {Place} from "./Place"
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";

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

// const lugar: Place = new Place {
//     cep: "22222222"
// }
const residence = new Residence (3, "72499-899")
console.log("CEP: ",residence.getCep())
console.log("Quantidade de moradores: ",residence.getResidentsQuantity())
const commerce = new Commerce (1, "44574-321")
console.log("CEP: ", commerce.getCep())
console.log("Quantidade de andares: ",commerce.getFloorsQuantity())
const industy = new Industry (20, "33212-898")
console.log("CEP: ", industy.getCep())
console.log("Quantidade de maquinas: ", industy.getMachinesQuantity())


