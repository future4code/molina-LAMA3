import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { Band, BandDTO, GetBandByNameDTO, getBandByNameOutputDTO } from "../business/entities/Band";


export class BandController {

    async createBand(request: Request, response: Response) {
        try {

            const token: string = request.headers.authorization as string

            const bandDTO: BandDTO = {
                name: request.body.name,
                music_genre: request.body.music_genre,
                responsible: request.body.responsible,
                token
            }

            await new BandBusiness().createBand(bandDTO)

            response.status(201).send("Banda cadastrada com sucesso!")
            
        } catch (error: any) {
            let message = error.sqlMessagem || error.message
            response.statusCode = 400

            response.send({message})
        }
    }

    async getBandByName(request: Request, response: Response) {
        
        try {

        let message = "Banda requisitada com sucesso!"
        
        const getBandByNameDTO: GetBandByNameDTO = {
            name: request.params.name
        }

        const band: Band = await new BandBusiness().getBandByName(getBandByNameDTO)

        const output: getBandByNameOutputDTO = {
            name: band.name,
            music_genre: band.music_genre,
            responsible: band.responsible
        }

        response.status(200).send({message, output})

    } catch (error: any) {
        let message = error.sqlMessage || error.message
        response.statusCode = 400
  
        response.send({message})
    }
    }

}