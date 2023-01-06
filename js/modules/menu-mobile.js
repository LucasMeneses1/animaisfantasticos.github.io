import outsideEvent from "./outside-event.js";

export default class MenuMobile {
  constructor(menuMobileButton, menuList, events, classe) {
    this.menuMobileButton = document.querySelector(menuMobileButton);
    this.menuList = document.querySelector(menuList);
    if (events) this.events = events;
    else this.events = ["touchstart", "click"];
    this.classe = classe;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(e) {
    e.preventDefault();
    this.menuMobileButton.classList.add(this.classe);
    this.menuList.classList.add(this.classe);
    outsideEvent(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.classe);
      this.menuMobileButton.classList.remove(this.classe);
    });
  }

  addEventMenu() {
    this.events.forEach((event) => {
      this.menuMobileButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuMobileButton && this.menuList) {
      this.addEventMenu();
    }
    return this;
  }
}
