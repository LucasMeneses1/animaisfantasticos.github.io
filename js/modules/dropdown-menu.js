import outsideEvent from "./outside-event.js";

export default class DropdownMenu {
  constructor(menus) {
    this.dropdownMenus = document.querySelectorAll(menus);
  }

  handleClick(e) {
    e.preventDefault();
    this.classList.add("ativo");
    outsideEvent(this, ["touchstart", "click"], () => this.classList.remove("ativo"));
  }

  addDropdownMenu() {
    this.dropdownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => menu.addEventListener(userEvent, this.handleClick));
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenu();
    }
    return this;
  }
}
