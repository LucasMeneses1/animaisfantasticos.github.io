export default class AccordeonList {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
    this.showClass = "exibir";
  }

  toggleAcordion(exibir) {
    exibir.classList.toggle(this.showClass);
  }

  addAccordeonEvent() {
    this.accordionList.forEach((element) => {
      const exibir = element.nextElementSibling;
      element.addEventListener("click", () => {
        element.classList.toggle(this.activeClass);
        this.toggleAcordion(exibir);
      });
    });
  }

  // inicia a função
  init() {
    if (this.accordionList.length) {
      // ativando o primeiro item
      this.accordionList[0].classList.add(this.activeClass);
      this.accordionList[0].nextElementSibling.classList.add(this.showClass);
      // ativando o evento do efeito
      this.addAccordeonEvent();
    }
  }
}
