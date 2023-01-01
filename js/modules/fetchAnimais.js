import initAnimacaoNumeros from "./animacao-numeros.js";

export default function initFetchAnimais() {
  try {
    async function fetchAnimais(url) {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numeros = document.querySelector(".numeros ul");
      animaisJSON.forEach((animal) => {
        const liAnimal = criarAnimal(animal);
        numeros.appendChild(liAnimal);
      });
      initAnimacaoNumeros();
    }
  } catch (erro) {
    console.log(erro);
  }

  function criarAnimal(animal) {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return li;
  }

  fetchAnimais("./js/animaisApi.json");
}
