export default function initFuncionamento() {}

const funcionamento = document.querySelector("[data-semana]");
const diasFuncionamento = funcionamento.dataset.semana.split(",").map(Number);
const horarioFuncionamento = funcionamento.dataset.horario
  .split(",")
  .map(Number);

const diaAtual = new Date().getDay();
const horaAtual = new Date().getHours();

if (
  diasFuncionamento.indexOf(diaAtual) !== -1 &&
  horaAtual >= horarioFuncionamento[0] &&
  horaAtual <= horarioFuncionamento[1]
) {
  funcionamento.classList.add("aberto");
}
