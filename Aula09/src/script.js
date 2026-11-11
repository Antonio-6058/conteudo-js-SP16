// Funções

let novoCarro = "Audi";

function exibirCarro() {
    let novoCarro = "Porsche";
    console.log(novoCarro);
}

exibirCarro();

console.log("");


// Função com 4 parâmetros
function saudacao(nome, sobrenome, idade, altura) {
    let saudacaoMensagem = "Olá, eu me chamo " + nome + " " + sobrenome + ", tenho " + idade + " anos de idade e " + altura + "m de altura.";

    return saudacaoMensagem;

}

console.log (saudacao("Kimberly", "Brasilino", "18", "1.70"))

console.log("");

// Função com 1 parâmetro

function paraCelsius(grausFahrenheit) {
    let grausCelsius = (5 / 9) * (grausFahrenheit - 32);

    let mensagemRetorno = grausFahrenheit + "° Fahrenheit em Celsius é igual a: " + grausCelsius + "°C";

    return mensagemRetorno;
}

let grausFahrenheit = 212;
//let grausFahrenheit = parseFloat(prompt("Informe um valor de temperatura em Fahrenheit para converter em Celsius"));

const elementoh3 = document.querySelector(".ex1");

elementoh3.innerHTML = paraCelsius(grausFahrenheit);
elementoh3.computedStyleMap.fontFamily = "sans-serif";

console.log("");
//Valor padrão para parâmetro
console.log("Função com valor padrão para parâmetro");

function soma(a = 1, b = 2) {
    return a 
    + b;
}

console.log(soma(10,4));//definindo a e b
console.log(soma(4));//definindo apenas a
console.log(soma());//sem definir

console.log("");
//Ultilizando valor retornado de função em expressão matemática
console.log("Ultilizando valor retornado de função em expressão matemática");

function multiplicar(a, b) {
    return a * b;
}

let resultadoExpressao = multiplicar(5, 10) / 2;

console.log("");
//Ultilizando dois retornos em uma função
console.log("Ultilizando dois retornos em uma função");

function subtracao(a, b) {
    return "somente a dor coletiva gera união";
    return a - b; //ñ vai funcionar
}

let resultado = subtracao(10, 5);
console.log(resultado);

console.log("");
//Ultilizando return para finalizar execução ultilzando lógica
console.log("Ultilizando return para finalizar execução ultilzando lógica");

function verificarIdade(idade) {
    if (idade < 18) {
        return "Você é menor de idade";
    }
    return "Você é maior de idade";
}

let resultado2 = verificarIdade(16);
console.log(resultado2);
