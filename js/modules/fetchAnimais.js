import AnimacaoNumeros from "./animacao-numeros.js";

export default function initFetchAnimais() {
  function criarAnimal(animal) {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return li;
  }

  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const numeros = document.querySelector(".numeros ul");
    animaisJSON.forEach((animal) => {
      const liAnimal = criarAnimal(animal);
      numeros.appendChild(liAnimal);
    });
    const animaNumeros = new AnimacaoNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }
  try {
    fetchAnimais("./js/animaisApi.json");
  } catch (erro) {
    console.log(erro);
  }
}
