import { Band, toBandModel } from "../business/entities/Band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {

    async createBand(band: Band) {

    try {
        
        await BaseDatabase.connection("LAMA_BANDAS").insert({
            id: band.id,
            name: band.name,
            music_genre: band.music_genre,
            responsible: band.responsible
        })

    } catch (error: any) {
        throw new Error(error.sqlMessagem || error.message)
    }
    }

    async getBandByName(name: string): Promise<Band> {
        try {

            const result: any = await BaseDatabase.connection("LAMA_BANDAS").select("*").where({name})

            return toBandModel(result[0])
            
        } catch (error: any) {
            throw new Error(error.sqlMessagem || error.message)
        }
    }
}