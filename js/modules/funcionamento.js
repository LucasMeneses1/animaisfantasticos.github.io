export default class Funcionamento {
  constructor(funcionamento, classe) {
    this.funcionamento = document.querySelector(funcionamento);
    this.diasFuncionamento = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioFuncionamento = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
    this.diaAtual = new Date().getDay();
    this.horaAtual = new Date().getUTCHours() - 3;
    this.classe = classe;
  }

  init() {
    if (
      this.diasFuncionamento.indexOf(this.diaAtual) !== -1
      && this.horaAtual >= this.horarioFuncionamento[0]
      && this.horaAtual <= this.horarioFuncionamento[1]
    ) {
      this.funcionamento.classList.add(this.classe);
    }
  }
}
