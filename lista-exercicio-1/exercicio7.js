/*
7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.
*/
// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

const Nota1 = parseFloat(prompt("Digite a primeira nota do aluno: "));
const Nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));

const pesoNota1 = 4;
const pesoNota2 = 6;

const mediaFinal = (Nota1 * pesoNota1 + Nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

console.log("");
console.log("A média final do aluno é: " + mediaFinal.toFixed(2));