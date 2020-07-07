import { Client } from "./Client";

export class ClientManager {
    private clients : Client [] = []

    constructor() {
        this.clients = []
    }

    getClientsQuantity(): number {
        return this.clients.length;
    }

    registerClient(client: Client): void {
        this.clients.push(client)
    } 
    calculateBillOfClient(registrationNumber: number) : number {
        const foundClient = this.clients.find((client) =>{
            return client.registrationNumber === registrationNumber
        })
        if(foundClient){
            return foundClient.calculateBill()
        }

        return 0
    }
    calculeTotalIncome():  number {
        let total: number = 0;
        this.clients.forEach((client) =>{
            total += client.calculateBill()
        })
        return total
    }

    deleteUser(registrationNumber:number): void {   
        let registrationIndex = undefined

        for (let i =0; i < this.clients.length; i++ ){
            if(this.clients[i].registrationNumber === registrationNumber){
                registrationIndex = i;
            }
        }

        if (registrationIndex !== undefined) {
            this.clients.splice(registrationIndex, 1)
        }
    }   
        
    }
    
}