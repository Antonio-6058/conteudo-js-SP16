//eventos

//evento de click com o addeventlistener()

const paragrafo = document.querySelector ("#ex1-p");
const botao = document.querySelector ("#ex1-btn");

botao.addeventlistener("click", () => {
    paragrafo.classList.toggle("estilo");
     paragrafo.innerHTML = "somente a dor coletiva gera união.";
});


// botao.addeventlistener("click",adicionarEstilo);

// botao.adicionarEstilo() {
//     paragrafo.classList.toggle("estilo");
//     paragrafo.innerHTML = "somente a dor coletiva gera união.";
// }