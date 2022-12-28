/* navegação por tabs */
function initNavTabs() {
  const animaisImgs = document.querySelectorAll(".js-tab img");
  const animaisArtigos = document.querySelectorAll(".js-tab-conteudo .artigo");

  animaisArtigos[0].classList.add("ativo");

  if (animaisImgs.length && animaisImgs.length) {
    function tabAtiva(index) {
      animaisArtigos.forEach((element) => {
        element.classList.remove("ativo");
      });
      animaisArtigos[index].classList.add("ativo");
    }

    animaisImgs.forEach((element, index) => {
      element.addEventListener("click", () => {
        tabAtiva(index);
      });
    });
  }
}
initNavTabs();

/* accordeon list */
function initAccordeonList() {
  const perguntas = document.querySelectorAll(".js-accordeon-list dt");
  const respostas = document.querySelectorAll(".js-accordeon-list dd");

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
initAccordeonList();

/* Scroll suave */
function initScrollSuave() {
  const linksInt = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollSuave(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    /* window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    }); */
  }

  linksInt.forEach((e) => {
    e.addEventListener("click", scrollSuave);
  });
}
initScrollSuave();

/* Animação scroll */
function initAnimacaoScroll() {
  const sections = document.querySelectorAll("section.js-animacao-scroll");
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
initAnimacaoScroll();
