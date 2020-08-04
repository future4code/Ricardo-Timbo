import { BandInputDTO } from "../model/Bands";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {
    public async registerBand(band: BandInputDTO): Promise<string> {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();
        
        
        return"";

    }
}