import { Client } from "./Client"
import { Industry } from "./Industry"

export class CommercialClient extends Industry implements Client {

    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string,
        machinesQuantity: number,
        cep: string
    ){
        super (machinesQuantity, cep)
    }
    getIndustryNumber(): string {
        return this.industryNumber
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}
