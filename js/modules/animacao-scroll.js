export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("section[data-anime='scroll']");
  const alturaJanela = window.innerHeight;

  if (sections.length) {
    function animacaoScroll() {
      sections.forEach((e) => {
        if (e.getBoundingClientRect().top - alturaJanela * 0.6 < 0) {
          e.classList.add("ativo");
        } else e.classList.remove("ativo");
      });
    }

    window.addEventListener("scroll", animacaoScroll);
    animacaoScroll();
  }
}
