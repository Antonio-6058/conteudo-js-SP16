// Objetos

// Criando objetos com construtores
function Carro(marca, modelo, ano, quantidadeRodas, cor) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.quantidadeRodas = quantidadeRodas;
  this.cor = cor;
}

const carroAndre = new Carro("Hyundai", "I30", 2012, 4, "preto");

const carroRichard = new Carro("Honda", "Civic SI", 2008, 4, "branco");

console.log(carroAndre);
console.log(carroRichard);

carroAndre.quilometragem = 80000;
carroRichard.aroRoda = 18;

console.log("");

console.log(carroAndre);
console.log(carroRichard);

const carroLaiza = new Carro("Honda", "Civic", 2002, 4, "vermelho");

console.log(carroLaiza);