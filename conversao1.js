const prompt = require("prompt-sync")()

 /*João, homem de bem, comprou um microcomputador para controlar o rendimento diário
de seu trabalho. Toda vez que ele traz um peso de tomate maior que o estabelecido pelo
regulamento do estado de São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo
excedente. João precisa que você faça um sistema que leia a variável P (peso de tomates) e
verifique se há excesso. Se houver, gravar na variável E (Excesso) e na variável M o
valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o 
conteúdo ZERO. */

let peso = Number(prompt("qual o peso dos tomates: "))

let excesso = peso - 50

if(excesso > 0){
    multa = excesso * 4

    console.log("por conta de excesso, multa de: R$ "  + multa + " Pois estava acima de 50 quilos")
}else{
    console.log("O valor total permanece o mesmo")
}