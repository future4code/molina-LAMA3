import { BandDatabase } from "../data/BandDatabase";
import { Band, BandDTO, GetBandByNameDTO } from "./entities/Band";
import { Authenticator } from "./services/Authenticator";
import { IdGenerator } from "./services/IdGenerator";


export class BandBusiness {
    private authenticator: Authenticator
    private idGenerator: IdGenerator

    constructor() {
        this.authenticator = new Authenticator()
        this.idGenerator = new IdGenerator()
    }

    async createBand(bandDTO: BandDTO) {
        try {
            
            if (!bandDTO.token) {
                throw new Error("O token de autorização deve ser fornecido.")
            }

            const tokenData = this.authenticator.getTokenData(bandDTO.token)

            const id: string = this.idGenerator.generateId()

            const bandModel: Band = {
                id,
                name: bandDTO.name,
                music_genre: bandDTO.music_genre,
                responsible: bandDTO.responsible
            }

            await new BandDatabase().createBand(bandModel)

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getBandByName(getBandByNameDTO: GetBandByNameDTO) {

        try {

            const band: Band = await new BandDatabase().getBandByName(getBandByNameDTO.name)

            if (!band) {
                throw new Error("Banda não encontrada!")
            }

            return band
            
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}