/* Forma padrao como o nome pega informacao do terminal, 
sem biblioteca, utilizando o modulo core readline

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.questuib('Qual o seu nome?') , nome => {

    console.log("Olá " + nome + "! tudo bem com voce?")

    readline.close();
}

*/

const prompt = require('prompt-sync')();

const nome = prompt('Qual o seu nome?')
const idade = prompt('Qual a sua idade ?')
const curso = prompt('Qual o seu curso?')
const notaA1 = prompt('Qual a nota A1?')
const notaA2 = prompt('Qual a nota A2?')

console.log(`Olá ${nome}, seu curso é ${curso}`)

if(idade >= 18) {
    console.log("Você já é maior de idade!")
} else {
    console.log("Você ainda é menor de idade!")
}

//trnsformando string recebido para number
const notaA1num = Number(notaA1)
const notaA2num = Number(notaA2)
// calcular média, se for maior ou igual que 7 aprovado

const media = (notaA1num + notaA2num) / 2

console.log("Média: " + media)

if(media >= 7 ){
    console.log("Aprovado")
} else {
    console.log("Reprovado!@#$!@%#$!......")
}
