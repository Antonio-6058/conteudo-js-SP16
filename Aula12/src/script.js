//objetos

//propiedades de objeto

const pessoa = {
    nome: "Antonio", 
    altura: 1.87,
    idade: 21,
};
console.log(pessoa);

//let respostaUsuario = prompt("Informe o identificador de alguma propriedade no objeto pessoa");
//console.log(pessoa[respostaUsuario]);

console.log(pessoa.nome);
console.log(pessoa["altura"]);
console.log("");

// /alterando, adicionando e excluindo propiedades

//alterando
pessoa.idade = 20;
console.log(pessoa);

//adiconando
pessoa.ultimoNome = "Oliveira";
console.log(pessoa);

//deletando
delete pessoa.altura;
console.log(pessoa);
console.log("");

//Verificando existência de propiedade em objeto

let testePropi = ("idade" in pessoa);

console.log(testePropi);

// /objetos animados

const pessoa2 = {
    nome: "Bartolomel",
    sobrenome: "Medeiros",
    profissão:"Garoto de programa",
    conteudo: {
        lingua:"Java",
        parte:"Back-End",
    },
};

console.log(pessoa2);
console.log(pessoa2.conteudo);
console.log("");

//Métodos de objetos

const carros = {
    marca: "Gol",
    modelo: "Quadrado",
    ano:"2002",
    acelerar: function (){
        return `o ${this.marca} ${this.modelo} acelerou`;
    }
};

console.log(carros.acelerar());
console.log("");

//adicionando método em objeto
carros.derrapar = function () {
    return `o ${this.marca} ${this.modelo} derrapou`;
};

console.log(carros.derrapar);
console.log("");

