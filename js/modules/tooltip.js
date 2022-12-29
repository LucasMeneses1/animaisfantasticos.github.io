export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    const texto = element.getAttribute("aria-label");
    tooltipBox.innerText = texto;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = event.pageY + 20 + "px";
    tooltipBox.style.left = event.pageX + 20 + "px";

    onMouseMove.tooltipBox = tooltipBox;
    onMouseMove.element = this;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  tooltips.forEach((e) => e.addEventListener("mouseover", onMouseOver));
}