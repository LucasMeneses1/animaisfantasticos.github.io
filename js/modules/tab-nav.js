export default class NavTabs {
  constructor(imgs, artigos) {
    this.imgs = document.querySelectorAll(imgs);
    this.artigos = document.querySelectorAll(artigos);
  }

  ativaTab(index) {
    this.artigos.forEach((element) => {
      element.classList.remove("ativo");
    });
    const animacao = this.artigos[index].dataset.anime;
    this.artigos[index].classList.add("ativo", animacao);
  }

  addNavTab() {
    this.imgs.forEach((element, index) => {
      element.addEventListener("click", () => this.ativaTab(index));
    });
  }

  init() {
    if (this.imgs.length && this.artigos.length) {
      this.ativaTab(0);
      this.addNavTab();
    }
    return this;
  }
}
