/*
2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
*/
// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

const totalEleitores = parseInt(prompt("Digite o número total de  eleitores: "));
const votosBrancos = parseInt(prompt("Digite o número de votos em branco: "));
const votosNulos = parseInt(prompt("Digite o numero de votos nulos: "));
const votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

const porcentagemBrancos = (votosBrancos / totalEleitores) * 100;
const porcentagemNulos = (votosNulos / totalEleitores) *  100;
const porcentagemValidos = (votosValidos / totalEleitores) * 100;

console.log("");
console.log("Percentual de votos em branco: " + porcentagemBrancos.toFixed(2) + "%")
console.log("percentual de votos nulos: " + porcentagemNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + porcentagemValidos.toFixed(2) + "%");
