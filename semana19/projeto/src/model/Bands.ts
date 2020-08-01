export class Band{
    constructor(
    private id: string,
    private name: string,
    private music_genre: string,
    private responsibled: string
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getMusicGenre(){
        return this.music_genre;
    }

    getResponsibled(){
        return this.responsibled;
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setMusicGenre(music_genre: string){
        this.music_genre = music_genre;
    }

    setResponsibled(responsibled: string){
        this.responsibled = responsibled;
    }

    static toUserModel(band: any): Band {
        return new Band(band.id, band.name, band.music_genre, band.responsibled );
      }


}

export interface BandInputDTO{
    name: string;
    music_genre: string;
    responsibled: string;
}