/*
4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
*/
// Aluno: Gabriel Gertrudes De Oliveira Matricula: 23114290182
const prompt = require('prompt-sync')();

const custoDaFabrica = parseFloat(prompt("Digite o custo do carro direto da fabrica:"));

const percentualDistribuidor = 0.28;
const percentualImpostos = 0.45;

const custoDoDistribuidor = custoDaFabrica * percentualDistribuidor;
const custoDosImpostos = custoDaFabrica * percentualImpostos;
const custoDoConsumidor = custoDaFabrica + custoDoDistribuidor + custoDosImpostos;
console.log("");
console.log("Valor do custo de fábrica: R$ " + custoDaFabrica.toFixed(2));
console.log("");
console.log("Valor dos impostos: R$ " + custoDosImpostos.toFixed(2));
console.log("Valor dos distribuidor: R$ " + custoDoDistribuidor.toFixed(2));
console.log("Custo final ao consumidor do carro novo: R$ " + custoDoConsumidor.toFixed(2));