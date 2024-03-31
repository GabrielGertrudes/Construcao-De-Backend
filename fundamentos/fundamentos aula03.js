//Imprimindo informações no terminal
console.log("TESTE");

// Variaveis
// var, const, let
// var (comando antigo)
var testandoVar = "testandoVar"
console.log(testandoVar);

// Const -> Crirar uma constante (variavel que nao sofre alteração)
const PI = 3.14

// pi = 9999
console.log(PI)

// let -> criar uma variável que pode sofrer alterações
let nomeCompleto
console.log(nomeCompleto)
nomeCompleto = "Gabriel"
console.log(nomeCompleto)
nomeCompleto = "Gabriel Gertrudes"
console.log(nomeCompleto)

/* Tipos de dados
String
    -> 'ASDUSAHDA' "ASDHASUDAH" `ÁSDASDA ${COMANDO EM JAVASCRIPT}`
Number
    -> 1 1.2 -12
Boolean
    -> true ou false
Array
    -> (Matruz) lista de informações
    -> [1,2,3,4]
Object
    -> {
            "chave": "valor",
            chave: 1
    }
null 
    -> ausência de valor
undefined 
    -> indefinido 
Nan
    -> não é um numero ex: 10/"olá" 
    
    Tratamento de Dados

    */

   // String
let textoCompleto = "Olá tudo bem com você"

console.log(textoCompleto.toUpperCase())
console.log(textoCompleto.toLowerCase())
console.log(textoCompleto.replace("tudo", "1234"))
// não existe replaceAll no node, tenho que utilizar replace com regex

let numeroEmString = String(1.56)
console.log(numeroEmString)
console.log(typeof numeroEmString)

//Number
let StringEmNumero = Number("1.15")
console.log(StringEmNumero)
console.log(typeof StringEmNumero)

console.log(Number.parseInt("1.58"))
let testandoParseFloat = Number.parseFloat(20)
console.log(testandoParseFloat.toFixed(4))

// Array
let ListaDeCarros = ["Gol", "Uno", "corola", "civic"]
console.log(ListaDeCarros)

ListaDeCarros.pop()
console.log(ListaDeCarros)

// Object
let pessoa = {
    nome: "Gabriel Gertrudes",
    idade: 20,
    curso: "ADS",
    matricula: "2311422232",
    instituicao: "IESB",
    endereco: {
        cep: "72000000",
        cidade: "Cei",
        numero: 20
    }
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.endereco)

pessoa.nome = "Gabriel Gertrudes"
console.log(pessoa.nome.toUpperCase())

    /*
        Operadores aritmeticos:
        + - * / % **
        precedência
        ()
        **
        * / %
        + -
        Math
        
        Operadores relacionais
        > < >= <=
        == != igual e diferente

        compara valor e tipo
        === !== igualdade restrita e diferenca restrita

        Operadores lógicos
        ! negação
        && E
        || OU

        IF ELSE

        if(condicao) {
                acao
        }
    */
let idade = 16

if(idade>= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menos de idade")
}

let curso = "ads"
idade = 20

if (curso == "ads" && idade >= 18){
    console.log("confirmado")
} else {
    console.log("negado")
}

if(curso == "ads") {
    console.log("o curso não é ads")
} if (idade >= 18) {
    console.log("maior de idade")
} else {
    console.log("nenhuma condição atendida")
}

/* 
Repetição 

for (inicializacao; condicao; incremento) {
    acao
} 
*/

for (let i = 1; i == 10; i ++) {
    console.log("contador? " , i)
    if (i == 5) {
        i = 11
    }
        console.log("loop")
}

//funcao

function executa() {
    console.log("Chamando funcao executa")
}

// funcao com parametro e sem retorno
function executa(nome) {
    console.log("Chamado funcao executa com parametro")
    console.log(nome)
}

// executa()
executa("Gabriel")

// funcao com retorno

function soma(numA, numB) {
    return numA + numB
}

let resultado = soma(2, 4)
console.log(resultado)

// console.log("CHAMANDO MULTIPLICAR ANTES", multiplicar( 2, 2))

const multiplicar = function (numA, numB) {
    return numA * numB
}
console.log("CHAMANDO MULTIPLICAR ANTES", multiplicar( 2, 2))

const teste = () => console.log("TESTE")

teste()

const somaArrow = (numA, numB) => numA + numB
console.log("CHAMANDO somaArrow", somaArrow(2,5)) 


