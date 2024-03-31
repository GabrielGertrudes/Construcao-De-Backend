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



// PARA AGORA NOW!
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






// start da aplicação na porta definida
app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})