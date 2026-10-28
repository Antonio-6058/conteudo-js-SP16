//Saída com innerHTMl

//queryselector = buscar por seletor
document.querySelector(".ex1").innerHTML =
`
<li>Item01</li>
<li>Item02</li>
<li>Item03</li>
`;

//saida com innerText = altera apenas o conteúdo do elemento

document.querySelector(".ex2").innerText = "Somente a dor coletiva gera união";

// document.white sobrescreve todo o código da página, substitui

//Saída com alert()
//exibirresultado = função, window.alert() = janela de aviso

function exibirResultado() {
    window.alert(10+10);
}

//Saída com console.log
console.log("Somente a dor coletiva gera união");

//saída com print()

function imprimir() {
    window.print();
}