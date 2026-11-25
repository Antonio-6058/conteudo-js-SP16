// Métodos de Array

const frutas = ["Maçã", "Kiwi", "Uva", "Laranja", "Pêra", "Maracujá"];

console.log(frutas);

console.log("");

// Método at()
let frutasAt = frutas.at(2);
console.log(frutasAt);

console.log("");

// Método join()
let frutasJoin = frutas.join(" - ");
console.log(frutasJoin);

console.log("");

// Método pop()
console.log(frutas);

frutas.pop();

console.log(frutas);

console.log("");

// Método push()
console.log(frutas);

frutas.push("Maracujá");

console.log(frutas);

console.log("");

// Método shift()
console.log(frutas);

frutas.shift();

console.log(frutas);

console.log("");

// Metodo unshift()
console.log(frutas);

frutas.unshift("Tangerina");

console.log(frutas);

console.log("");

// Alterando Elemento de Array
frutas[1] = "Limão";

console.log(frutas);

console.log("");

// Método isArray();
let frutasIsArray = Array.isArray(frutas);
console.log(frutasIsArray);

console.log("");

// Método concat()
const frutas2 = ["Jabuticaba", "Graviola", "Goiaba"];

const frutasConcatenadas = frutas.concat(frutas2);

console.log(frutasConcatenadas);

console.log("");

// Método copyWithin()
const cores = ["Laranja", "Amarelo", "Vermelho", "Verde"];
console.log(cores);

cores.copyWithin(2, 0);
console.log(cores);

console.log("");

// Matriz em JavaScript
// const matriz = [[1, 2, 3], [4, 5, 6]];

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
];

let itemMatriz = matriz[1][2];

console.log(itemMatriz);

console.log("");

// Método flat()
const matrizPlana = matriz.flat();
console.log(matriz); 
console.log(matrizPlana);

console.log("");

// Método flatMap()
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

const numerosFlatMap = numeros.flatMap( (numero) => {
  return [numero, numero * 10];
} );

console.log(numerosFlatMap);

console.log("");

// Método splice()
const carros = ["Gol", "Civic", "Punto"];
console.log(carros);

carros.splice(1, 0, "Corsa", "Golf");
console.log(carros);

console.log("");

carros.splice(4, 1);
console.log(carros);

console.log("");

// Método toSpliced()
const meses = ["Janeiro", "Fevereiro", "Março", "Abril"];
console.log(meses);

const mesesToSpliced = meses.toSpliced(0, 2);

console.log(mesesToSpliced);

console.log("");

// Método slice()
const alunos = ["Laiza", "Molina", "Claudia", "Emilly", "André"];
console.log(alunos);

const alunosSlice = alunos.slice(2);
console.log(alunosSlice);

console.log("");

const alunosSlice2 = alunos.slice(0, 2);
console.log(alunosSlice2);

console.log("");