export default class AnimacaoNumeros {
  constructor(numeros, observerTarget, observerTrigger) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerTrigger = observerTrigger;
    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
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
  }

  animacaoNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerTrigger)) {
      // para repetir a animação apenas na primeira vez que os numeros aparecerem,
      // ativar esse método
      /* this.observer.disconnect(); */
      this.animacaoNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    this.addMutationObserver();
    return this;
  }
}
