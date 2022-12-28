export default function initAccordeonList() {
  const perguntas = document.querySelectorAll("[data-anime='accordeon'] dt");
  const respostas = document.querySelectorAll("[data-anime='accordeon'] dd");

  respostas[0].classList.add("exibir");
  perguntas[0].classList.toggle("ativo");

  function exibirResposta(index) {
    respostas[index].classList.toggle("exibir");
  }

  perguntas.forEach((element, index) => {
    element.addEventListener("click", () => {
      element.classList.toggle("ativo");
      exibirResposta(index);
    });
  });
}
