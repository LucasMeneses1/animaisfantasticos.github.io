export default function initScrollSuave() {
  const linksInt = document.querySelectorAll(
    "[data-menu='smooth'] a[href^='#']"
  );

  function scrollSuave(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    /* window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    }); */
  }

  linksInt.forEach((e) => {
    e.addEventListener("click", scrollSuave);
  });
}
