export interface Band {
    id: string,
    name: string,
    music_genre: string,
    responsible: string
}

export interface BandDTO {
    name: string,
    music_genre: string,
    responsible: string,
    token: string
}

export interface GetBandByNameDTO {
    name: string
}

export interface getBandByNameOutputDTO {
    name: string,
    music_genre: string,
    responsible: string
}

export function toBandModel(objeto: any): Band{
    return objeto && {
        id: objeto.id,
        name: objeto.name,
        music_genre: objeto.music_genre,
        responsible: objeto.responsible
    }
}