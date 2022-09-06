const prompt = require("prompt-sync")()

/* 2- Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR)*/

let contadorpar = 0
let contadorimpar = 0

for(numero = 0; numero < 10; numero++){
    let numero = Number(prompt("Digite os números: "))

if (numero % 2 == 0){
    contadorpar++
} else {
    contadorimpar++
}
}
console.log(`Números pares: ${contadorpar}\n`)
console.log(`Números ìmpares: ${contadorimpar}`)
