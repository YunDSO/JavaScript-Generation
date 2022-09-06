

const prompt = require("prompt-sync")()

/*2 - Faça um programa em que o usuário digite o diâmetro
    de um círculo e calcule a área e o perímetro dele*/

    let diametro = Number(prompt("qual o diâmetro do círculo? "))

    let raio = diametro / 2

    let area = 3.14 * Math.pow(raio,2)

    let perimetro = (2 * 3.14) * raio

    console.log(`A área do círcuolo é: ${area} e o seu perimetro é: ${perimetro}`)





