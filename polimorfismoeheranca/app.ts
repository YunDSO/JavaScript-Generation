import { Cachorro } from "./cachorroclass";
import { Cavalo } from "./cavaloclass";
import { Preguica } from "./preguicaclass";

let cachorro1 = new Cachorro( "Oliver" , 1)

console.log(`O nome do cachorro é ${cachorro1.nome}`)
console.log(`A idade do Oliver é ${cachorro1.idade}`)
console.log("Oliver está animado!")
cachorro1.emitirsom()
console.log("Oliver quer brincar com você!") 
cachorro1.correr()

let cavalo1 = new Cavalo( "Pangaré" , 6)

console.log(`O nome do cavalo é ${cavalo1.nome}`)
console.log(`A idade do Pangaré é ${cavalo1.idade}`)
console.log("Pangaré está feliz em te ver ")
cavalo1.emitirsom()
console.log("Pangaré quer galopar com você!")
cavalo1.correr()

let preguica1 = new Preguica( "Mario" , 3)

console.log(`O nome da preguiça é ${preguica1.nome}`)
console.log(`A idade de Mario é ${preguica1.idade}`)
console.log("Mario acabou de acordar!")
preguica1.emitirsom()
console.log("Mario acha melhor voltar a dormir!")
preguica1.correr()

