import { Client } from "./Client";

export class ClientManager {
    private clients : Client []

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
        //
    }
    
}