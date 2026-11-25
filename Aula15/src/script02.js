// Compreendendo o DOM

// Alterando o HTML

// Alterando Conteúdo de Elemento com o JavaScript
const elemento1 = document.querySelector("#ex1");

elemento1.innerHTML = "Somente a dor coletiva gera união.";

// Alterando Atributo de Elemento com o JavaScript
const elemento2 = document.querySelector("#ex2");

elemento2.src = "./img/l-acesa.gif";

// Adicionando conteúdo dinâmico com o JavaScript
const elemento3 = document.querySelector("#ex3");

elemento3.innerHTML = Date();