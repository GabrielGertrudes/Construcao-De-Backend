/*
8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura
*/
// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

const raio = parseFloat(prompt("Digite o raio da caixa d'água (em metros): "));
const altura = parseFloat(prompt("Digite a altura da caixa d'água (em metros): "));

const volume = Math.PI * (raio^2) * altura;

console.log("");
console.log("O volume da caixa d'água cilíndrica é: " + volume.toFixed(2) + " metros cúbicos.");