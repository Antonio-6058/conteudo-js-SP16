// Compreendendo o DOM

// Alterando Estilos de Elementos com JavaScript

// Alterando cores de elementos
const elemento1 = document.querySelector("#ex1");

elemento1.style.backgroundColor = "darkred";
elemento1.style.color = "blanchedalmond";

// Alterando cores de elementos com eventos
const elemento2 = document.querySelector("#ex2");

function adicionarEstilo() {
  elemento2.classList.toggle("estilo");
}

// Adicionando e removendo elementos com o JavaScript
const elemento3 = document.querySelector("#ex3");

function adicionarElemento() {
  elemento3.style.display = "block";
}

function removerElemento() {
  elemento3.style.display = "none";
}