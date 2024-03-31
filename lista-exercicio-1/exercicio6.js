/* 
6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
*/

const prompt = require('prompt-sync')();

const salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "));
const numeroDeCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
const valorTotalDeVendas = parseFloat(prompt("Digite o valor total das vendas:"));
const comissaoPorCarro = parseFloat(prompt("Digite o valor da comissão fixa por carro vendido: "));

const comissaoDosCarros = numeroDeCarrosVendidos * comissaoPorCarro;
const comissaoDeVendas = valorTotalDeVendas * 0.05;
const salarioFinal = salarioFixo + comissaoDosCarros + comissaoDeVendas;
console.log(" ");
console.log("Número de carros vendidos: " + numeroDeCarrosVendidos);
console.log("Valor total das vendas: R$" + valorTotalDeVendas.toFixed(2));
console.log("Salário fixo do vendedor: R$" + salarioFixo.toFixed(2));
console.log("Valor da comissão fixa por carro vendido: R$" + comissaoPorCarro.toFixed(2));
console.log("Salário final do vendedor: R$" + salarioFinal.toFixed(2));