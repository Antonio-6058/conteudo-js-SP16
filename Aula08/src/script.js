// Laços de repetição

// for
console.log("--- Laço for ---");
console.log("");

for (let contadora = 0; contadora < 10; contadora++) {
    console.log("O valor da variável contadora é: " + contadora);
}


// Arrays
console.log("");
console.log("--- Arrays ---");
console.log("");

let carros = ["Fusca", "Brasília", "Chevette", "Opala"];
let tamanhoArray = carros.length;
console.log(carros);

for (let acumuladora = 0; acumuladora < tamanhoArray; acumuladora++){
    console.log(carros[acumuladora]);
}

//laço while
console.log("");
console.log("--- Laço while ---");
console.log("");

let acumuladora = 0;
while (acumuladora <= 10) {
    console.log(acumuladora);
    acumuladora++;
}

//laço do-while
console.log("");
console.log("--- Laço do-while ---");
console.log("");
let acumuladora2 = 0;

do {
    console.log(acumuladora2);
    acumuladora2++;
}while (acumuladora2 <= 10);

console.log("");


