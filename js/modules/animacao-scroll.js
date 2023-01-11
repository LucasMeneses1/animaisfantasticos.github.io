import debounce from './debounce.js';

export default class AnimacaoScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.alturaJanela = window.innerHeight;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.alturaJanela * 0.6),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add("ativo");
      } else section.element.classList.remove("ativo");
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
