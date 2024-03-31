/*
1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0. 
*/
// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

const nomeAluno = prompt("Digite o nome do aluno?")
const nota1 = Number(prompt("Digite a nota 1: ").replace(',','.'))
const nota2 = Number(prompt("Digite a nota 2: ").replace(',', '.'))
const nota3 = Number(prompt("Digite a nota 3: ").replace(',', '.'))
const nota4 = Number(prompt("Digite a nota 4: ").replace(',', '.'))

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("");
console.log("Média alcançada: " + media)

if(media >= 7){
    console.log(`O aluno ${nomeAluno} foi aprovado!`)
} else {
    console.log(`O aluno ${nomeAluno} foi Reprovado!`)
}
