export abstract class Animal {
    nome : String
    idade : Number

    constructor(
        nome: String,
        idade : Number
){

    this.nome = nome
    this.idade = idade
} 

    abstract emitirsom() : void
    abstract correr() : void

} 