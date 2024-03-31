/*
9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.
*/

const prompt = require('prompt-sync')();

const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo numero: "));

const soma = numero1 + numero2;
const resultado = soma * numero1;

console.log("");
console.log("O resultado da soma dos números multiplicado é igual a: " + resultado);