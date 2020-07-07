//1 
//a) todas as propiedades, todos os atributos da interface são estão padrão 

//2
//a) não é possivel instanciar uma classe abstrata
//b) e necessario ter uma classe concreta que seja filha da Place

//3

//4 
//a todas as da interface e da classe Pai

//5 
// a) ambas implementam a interface Place (possuem um CEP) e as propiedas de um cliente (Classe Pai)
// b) o clientes residenciais possuem CPF e os Comerciais possuem CNPJ

//6 
//a) Da classe Industry
//b) Da interface Client
//c) pq não é possivel mudar os atributos por enquanto são todos estaticos

//7 

//8 



import {Client} from "./Client"
import {Place} from "./Place"
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { ClientManager } from "./ClientManager";
import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";

// const client: Client = {
//     name: "Goli",
//     registrationNumber: 1,
//     consumedEnergy: 100,
  
//     calculateBill: () => {
//       return 2;
//     }
//   }

// console.log("Nome: ", client.name)
// console.log("Id: ", client.registrationNumber)
// console.log("Consumo: ", client.consumedEnergy)
// console.log("Calculo: ", client.calculateBill())

// // const lugar: Place = new Place {
// //     cep: "22222222"
// // }
// const residence = new Residence (3, "72499-899")
// console.log("CEP: ",residence.getCep())
// console.log("Quantidade de moradores: ",residence.getResidentsQuantity())
// const commerce = new Commerce (1, "44574-321")
// console.log("CEP: ", commerce.getCep())
// console.log("Quantidade de andares: ",commerce.getFloorsQuantity())
// const industy = new Industry (20, "33212-898")
// console.log("CEP: ", industy.getCep())
// console.log("Quantidade de maquinas: ", industy.getMachinesQuantity())

const clientManager = new ClientManager()

const clienteResidencial = new ResidentialClient("Ricardo", 1, 100, "123.123.123-32", 3, "227700-333")
clientManager.registerClient(clienteResidencial)
const clienteComercial = new CommercialClient("Game House", 2, 200, "12.123.321/0032-56", 1, "335655-155")
clientManager.registerClient(clienteComercial)
const clienteIndustrial = new ResidentialClient("Industria de software", 3, 200, "46.654.654/0091-89", 20, "227700-333")
clientManager.registerClient(clienteResidencial)

