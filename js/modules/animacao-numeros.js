export default function initAnimacaoNumeros() {
  function animacaoNumeros() {
    const numeros = document.querySelectorAll("[data-numero");

    numeros.forEach((numero) => {
      const total = +numero.innerText;

      let start = 0;
      const count = setInterval(() => {
        const incremento = Math.floor(total / 100);
        numero.innerText = start;
        start += incremento;
        if (start > total) {
          numero.innerText = total;
          clearInterval(count);
        }
      }, 20 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animacaoNumeros();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
