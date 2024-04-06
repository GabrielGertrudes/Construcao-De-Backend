// configurando projeto
const express = require('express')
const app = express()
const port = 3000

// middlewares
app.use(express.json())

// lógica -> contrato
app.get('/hello', (req, res) => {
    res.send("Hello World")
})

// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
app.post('/exercicio1', (req, res) => {
    const corpo = req.body
    console.log(corpo)

    const estoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) / 2

    const resposta = {
        peca: corpo.peca,
        estoqueMedio: estoqueMedio
    }

    res.json(resposta)
})

/* 2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. 
Escreva uma API que receba o salário de um funcionário e imprima o valor do salário reajustado 
ou uma mensagem caso o funcionário não tenha direito ao aumento. */

app.post('/exercicio2', (req, res) => {
    const salario = req.body.salario;

    if (salario < 1000) {
        const novoSalario = salario * 1.3; 
        res.json( { "novoSalario": novoSalario });
    } else  {
        
        res.json({ "mensagem": "Funcionário não tem direito ao aumentoS" });
    }
})

/* 3. Escrever uma API que lê o nome de um vendedor, o seu salário fixo, 
o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. 
Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total. */

app.post('/exercicio3', (req, res) => {
    const { nome, salarioFixo, totalDeVendas, percentualDeComissao } = req.body;

    const  comissao = totalDeVendas * (percentualDeComissao / 100);
    const salarioTotal = salarioFixo + comissao;

    res.json({ "nome": nome, "salarioTotal": salarioTotal });
})

/* 4. Faça uma API que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). 
O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, 
e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h. */

app.post('/exercicio4', (req, res) => {
    const { nomeDoPiloto, distanciaPercorrida, tempoPercorridoHoras } = req.body;

    const velocidadeMedia = distanciaPercorrida / tempoPercorridoHoras;

    res.json({ "mensagem": `A velocidade media do ${nomeDoPiloto} foi de ${velocidadeMedia} km/h.` });
})

/* 5. Faça uma API que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:
    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30% */

    app.post('/exercicio5', (req, res) => {
        const {salario} = req.body;
        let salarioReajustado;
    
        if (salario <= 2000) {
            salarioReajustado = salario * 1.5;
        } else {
            salarioReajustado = salario * 1.3;
        }
    
        res.json({ "salarioReajustado": salarioReajustado }) ;
    })

/* 6. Construa uma API que calcule o peso ideal de uma pessoa. 
Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7 */

    app.post('/exercicio6', (req, res) => {
        const pessoas = req.body.pessoas;
        const pesosIdeais = [];
    
        if (pessoas && Array.isArray(pessoas)) {
            pessoas.forEach(pessoa => {
                if (pessoa && pessoa.altura && pessoa.sexo) {
                    let pesoIdeal;
                if (pessoa.sexo.toLowerCase() === 'homem') {
                        pesoIdeal = (72.7 * pessoa.altura) - 58;
                } else if (pessoa.sexo.toLowerCase() === 'mulher') {
                        pesoIdeal = (62.1 * pessoa.altura) - 44.7;
                } 
            if (pesoIdeal !== undefined) {
                        pesosIdeais.push(pesoIdeal.toFixed(2));
                }
                }
        });
        }
        res.json({ "pesos ideais de cada um!": pesosIdeais });
    });

/* 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.
 */

app.post('/exercicio7', (req, res) => {
    let listaProdutos = []

    req.body.forEach(produto => {
        listaProdutos.push(produto)
    });

    let maiorPrecoLido = 0
    listaProdutos.forEach(produto => {
        if (produto.preco > maiorPrecoLido){
            maiorPrecoLido = produto.preco
        }
    })

    let soma = 0
    console.log("soma ", soma)
    listaProdutos.forEach(produto => {
        console.log("produto preco ", produto.preco)
        soma = soma + produto.preco
        console.log("soma ", soma)
    })

    let media = soma / listaProdutos.length

    res.json({
        maiorPrecoLido: maiorPrecoLido,
        media: media.toFixed(2)
    })
})

/* 8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. 
Faça uma API que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. 
Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. 
Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10% */

app.post('/exercicio8', (req, res) => {
    const { salario, codigoCargo } = req.body;
    let aumentoPercentual, descricaoAumento;
    switch (codigoCargo) {
        case 101:
            aumentoPercentual = 0.05;
            descricaoAumento = "5% de aumento";
            break;
        case 102:
            aumentoPercentual = 0.075;
            descricaoAumento = "7.5% de aumento";
            break;
        case 103:
            aumentoPercentual = 0.1;
            descricaoAumento = "10% de aumento";
            break;
        default:
            aumentoPercentual = 0.15; 
            descricaoAumento = "15% de aumento (padrão!)";
            break;
    }

    const novoSalario = salario * (1 + aumentoPercentual);
    const diferenca = novoSalario - salario;
    res.json({
        "salario antigo": salario.toFixed(2),
        "novo saalario": novoSalario.toFixed(2),
        "diferenca": diferenca.toFixed(2),
        "descricao do aumento": descricaoAumento
    });
})

/* 9. Faça uma API que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. 
Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    • Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    • Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    • Para cada dependente acréscimo de 32 reais;
    • Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    • Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    • Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação. */

    app.post('/exercicio9', (req, res) => {
        const { salarioMinimo, horasDeTrabalho, dependentes, horasExtras } = req.body;
    
        const valorHoraTrabalhada = salarioMinimo / 5;
    
        const salarioMes = horasDeTrabalho * valorHoraTrabalhada;
    
        const valorDependentes = dependentes * 32;
        const valorHoraExtra = valorHoraTrabalhada * 1.5;
        const salarioHorasExtras = horasExtras * valorHoraExtra;
    
        const salarioBruto = salarioMes + valorDependentes + salarioHorasExtras;
    
        let irrf;
        if (salarioBruto <= 2000) {
            irrf = 0;
        } else if (salarioBruto <= 5000) {
            irrf = (salarioBruto - 2000) * 0.1;
        } else {
            irrf = 300 + (salarioBruto - 5000) * 0.2;
        }
        const salarioLiquido = salarioBruto - irrf;
    
        let gratificacao;
        if (salarioLiquido <= 3500) {
            gratificacao = 1000;
        } else {
            gratificacao = 500;
        }
        const salarioReceber = salarioLiquido + gratificacao;
    
        res.json({
            "salario a receber": salarioReceber.toFixed(2),
            "salario liquido": salarioLiquido.toFixed(2),
            "irrrf": irrf.toFixed(2),
            "gratificação": gratificacao.toFixed(2)
        });
    });
    

// start da aplicação na porta definida
app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})
