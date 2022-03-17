export interface IArticoli { // Interfaccia di Articoli in TypeScript. Mettiamo la I all'inizio per distinguire degli altri
    codart: string
    descrizione: string
    um: string
    pzcart: number
    peso: number
    prezzo: number
    active: boolean //determina se un articolo è presente
    data: Date //determina la data di inserimento di um articolo
}