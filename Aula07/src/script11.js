// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
// dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

alert("Idade em dias");

let idadeAnos = parseInt(prompt("Informe quantos anos completos você tem: "));
let idadeMeses = parseInt(prompt("Quantos meses se passaram des de seu último aniversário: "));
let idadeDias = parseInt(prompt("Informe quantos dias se passaram des de que completou seu último mês: "));

let idadeEmDiasGeral = (idadeAnos * 365) + (idadeMeses * 30) + idadeDias;

alert("Sua idade em dias é: " + idadeEmDiasGeral + " dias.");