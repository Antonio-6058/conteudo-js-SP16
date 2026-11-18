// arrays

// criando array
console.log("criando array");

const frutas = ["Maçã", "Morango", "Maracujá"];

console.log(frutas);
console.log("");

//adicionando elementos em arrays vazios
console.log("adicionando elementos em arrays vazios");

const carros = [];

carros[0] = "BMW";
carros[1] = "Volkswagen";
carros[2] = "Fiat";

console.log(carros);
console.log("");

//criando arrays com construtor array
console.log("criando arrays com construtor array");

const frutas2 = new Array("uva", "pera", "tomate");

console.log(frutas2);
console.log("");

//Acessando elemento de array
console.log("Acessando elemento de array");

const car2 = ["Kia", "Mini", "Toyota"];

console.log(car2);

let priCar = car2[0];

console.log(priCar);
console.log("");

//alterando elemento array
console.log("alterando elemento array");

const frutas3 = new Array("uva", "pera", "tomate");

console.log(frutas3);

frutas3[0] = "mamão";
console.log(frutas3);
console.log("");

//convertendo array em string 
console.log("convertendo array em string ");

const motos = ["CB500", "MT-07", "XJ6"];

console.log(motos);

let motoString = motos.toString();

console.log(motoString);
console.log("");

// Verificando Tipo de Dado em Array
console.log(typeof motos);

console.log("");

// Objeto em Array
const carro1 = {
  marca: "Porsche",
  modelo: "911 GT3",
};

const carro2 = {
  marca: "Porsche", 
  modelo: "718 GT4", 
};

const carros3 = [carro1, carro2];

console.log(carros3);

console.log("");

// Propriedade Length em Array
const alunos = ["Laiza", "André", "Marcela", "Molina", "Deborah", "Amorim"];

console.log(alunos);

let comprimentoAlunos = alunos.length;

console.log(comprimentoAlunos);

console.log("");

// Acessando o Último Elemento do Array
let ultimoElementoAlunos = alunos.length - 1;

console.log(alunos[ultimoElementoAlunos]);

console.log("");

// Utilizando Laço de Repetição para Percorrer Array
const cidades = ["São Paulo", "Campinas", "Campos do Jordão"];
console.log(cidades);

let quantidadeCidades = cidades.length;
console.log(quantidadeCidades);

for (let acumuladora = 0; acumuladora < quantidadeCidades; acumuladora++) {
  console.log(cidades[acumuladora]);
}

console.log("");

// Utilizando o Método forEach() para Percorrer Array

// cidades.forEach(listarCidades);

// function listarCidades(cidade) {
//   console.log(cidade);
// }

cidades.forEach( (cidade) => {
  console.log(cidade);
} );

console.log("");

// Adicionando Elementos no Array com o Método push()
const cores = ["Azul", "Laranja", "Vermelho"];

console.log(cores);

cores.push("Verde");

console.log(cores);

cores.push("Branco", "Preto");

console.log(cores);

console.log("");

// Adicionando Elemento no Array com a Propriedade Length
cores[cores.length] = "Rosa";

console.log(cores);

console.log("");

// Buracos Indefinidos em Array
cores[14] = "Roxo";

console.log(cores);
