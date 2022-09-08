import { Animal } from "./animalclass";

export class Cachorro extends Animal{
    
    emitirsom(): void {
        console.log("AUAUAU GRRRRR")
    }
    correr(): void {
        console.log("Correndo ofegante")
    }
}