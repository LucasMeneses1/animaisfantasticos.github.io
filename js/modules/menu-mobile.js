import outsideEvent from "./outside-event.js";

export default function initMenuMobile() {
  const menuMobileButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (menuMobileButton) {
    function openMenu(e) {
      menuMobileButton.classList.add("ativo");
      menuList.classList.add("ativo");
      outsideEvent(menuList, eventos, () => {
        menuList.classList.remove("ativo");
        menuMobileButton.classList.remove("ativo");
      });
    }

    eventos.forEach((evento) =>
      menuMobileButton.addEventListener(evento, openMenu)
    );
  }
}
