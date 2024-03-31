/*
3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.
*/

const prompt = require('prompt-sync')();

const salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionario:"));
const valordoReajuste = parseFloat(prompt("Digite o valor do reajuste salarial do funcionario: "));

const novoSalario = salarioAtual + valordoReajuste;
const percentualDoReajuste = (valordoReajuste / salarioAtual) * 100;

console.log("");
console.log("Novo salário do funcionario após o reajuste salarial: R$ " + novoSalario.toFixed(2));
console.log("Percentual de reajuste: " + percentualDoReajuste.toFixed(2) + "%");
