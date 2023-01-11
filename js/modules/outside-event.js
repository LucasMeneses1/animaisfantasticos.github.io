export default function outsideEvent(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleoutsideEvent(e) {
    if (!element.contains(e.target)) {
      events.forEach((event) => html.removeEventListener(event, handleoutsideEvent));
      element.removeAttribute(outside, "");
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((event) => {
      setTimeout(() => html.addEventListener(event, handleoutsideEvent));
    });
    element.setAttribute(outside, "");
  }
}
