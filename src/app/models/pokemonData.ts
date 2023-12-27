export type PokemonData = {
    name:string,
    id:number
    sprites: {
        front_default:string
    },
    types:{
        slot: number,
        type: {
            name:string 
            url: "https://pokeapi.co/api/v2/type/10/"   
        }
    }[]
}