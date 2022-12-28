export default function initNavTabs() {
  const animaisImgs = document.querySelectorAll("[data-tab='menu'] img");
  const animaisArtigos = document.querySelectorAll(
    "[data-tab='conteudo'] .artigo"
  );

  animaisArtigos[0].classList.add("ativo");

  if (animaisImgs.length && animaisArtigos.length) {
    function tabAtiva(index) {
      animaisArtigos.forEach((element) => {
        element.classList.remove("ativo");
      });
      const direcaoAnimacao = animaisArtigos[index].dataset.anime;
      animaisArtigos[index].classList.add("ativo", direcaoAnimacao);
      console.log(animaisArtigos[index]);
    }

    animaisImgs.forEach((element, index) => {
      element.addEventListener("click", () => {
        tabAtiva(index);
      });
    });
  }
}
