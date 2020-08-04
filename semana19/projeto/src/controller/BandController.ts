import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";

export class BandController {

    public async registerBand(req: Request, res: Response){
        try {
            
            const bandData = {
                name:req.body.name,
                music_genre: req.body.music_genre,
                responsibled: req.body.responsibled
            }

            const bandBusiness = new BandBusiness();
            const bandId = BandBusiness.registerBand(bandData.name, bandData.music_genre, bandData.responsibled)
            //TODO apenas usuários Admin pódem registrar a banda

        } catch (error) {
            
        }
    }
    
}