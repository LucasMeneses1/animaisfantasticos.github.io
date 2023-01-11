import outsideEvent from "./outside-event.js";

export default class DropdownMenu {
  constructor(menus, events, classe) {
    this.dropdownMenus = document.querySelectorAll(menus);
    if (events) this.events = events;
    else this.events = ["touchstart", "click"];
    this.classe = classe;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const element = e.currentTarget;
    e.currentTarget.classList.add(this.classe);
    outsideEvent(element, this.events, () => element.classList.remove(this.classe));
  }

  addDropdownMenu() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((event) => {
        menu.addEventListener(event, this.handleClick);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenu();
    }
    return this;
  }
}
