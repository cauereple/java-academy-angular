export interface IArticoli { // Interfaccia di Articoli in TypeScript
    codart: string
    descrizione: string
    um: string
    pzcart: number
    peso: number
    prezzo: number
    active: boolean //determina se un articolo è presente
    data: Date //determina la data di inserimento di um articolo
}