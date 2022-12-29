export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    events.forEach((event) => html.addEventListener(event, handleOutsideClick));
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      events.forEach((event) =>
        html.removeEventListener(event, handleOutsideClick)
      );
      element.removeAttribute(outside, "");
      callback();
    }
  }
}
