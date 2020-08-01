import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {

    private static TABLE_NAME = "BANDS_LAMA";

    public async registerBand (id: string, name: string, music_genre: string, responsibled: string){
        
        try {
            await super.getConnection()
            .insert({
                id,
                name,
                music_genre,
                responsibled
            })
            .into(BandDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
}