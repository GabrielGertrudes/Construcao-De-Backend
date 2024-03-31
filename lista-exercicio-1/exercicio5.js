/*
5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor.
*/
// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

const custoDaFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));
const percentualDoDistribuidor = parseFloat(prompt("Digite a porcentagem do distribuidor:"));
const percentualImposto = parseFloat(prompt("Digite a porcentagem dos impostos: "));
const custoDistribuidor = custoDaFabrica * (percentualDoDistribuidor / 100)
const custoDoImposto = custoDaFabrica * (percentualImposto / 100);
const custoDoConsumidor = custoDaFabrica + custoDistribuidor + custoDoImposto;

console.log("");
console.log("Custo de fábrica do carro: R$ " + custoDaFabrica.toFixed(2));
console.log("Porcentagem do distribuidor: " + percentualDoDistribuidor + "%");
console.log("Porcentagem dos impostos: " + percentualImposto + "%");
console.log("Custo final do carro ao consumidor: R$ " + custoDoConsumidor.toFixed(2));
