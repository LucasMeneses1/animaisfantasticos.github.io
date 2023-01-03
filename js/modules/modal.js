export default class Modal {
  constructor(abrir, fechar, modal) {
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(modal);
    this.toggleModal = this.toggleModal.bind(this);
    this.fecharModalClicandoFora = this.fecharModalClicandoFora.bind(this);
  }

  toggleModal(e) {
    e.preventDefault();
    this.containerModal.classList.toggle("ativo");
  }

  fecharModalClicandoFora(e) {
    if (e.target === e.currentTarget) this.toggleModal(e);
  }

  init() {
    this.botaoAbrir.addEventListener("click", this.toggleModal);
    this.botaoFechar.addEventListener("click", this.toggleModal);
    this.containerModal.addEventListener(
      "click",
      this.fecharModalClicandoFora,
    );
  }
}
