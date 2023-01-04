export default class Tooltip {
  constructor(element) {
    this.tooltips = document.querySelectorAll(element);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    const texto = element.getAttribute("aria-label");
    tooltipBox.innerText = texto;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver(e) {
    this.criarTooltipBox(e.currentTarget);
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    this.tooltipBox.style.left = `${e.pageX + 20}px`;
    e.currentTarget.addEventListener("mousemove", this.onMouseMove);
    e.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  onMouseLeave(e) {
    this.tooltipBox.remove();
    e.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    e.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 190}px`;
    } else this.tooltipBox.style.left = `${e.pageX + 20}px`;
  }

  addTooltipsEvent() {
    this.tooltips.forEach((e) => e.addEventListener("mouseover", this.onMouseOver));
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
