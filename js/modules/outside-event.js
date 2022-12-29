export default function outsideEvent(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  let i = 0;
  let j = 0;
  if (!element.hasAttribute(outside)) {
    events.forEach((event) => {
      setTimeout(() => html.addEventListener(event, handleoutsideEvent));
    });
    element.setAttribute(outside, "");
  }
  function handleoutsideEvent(e) {
    if (!element.contains(e.target)) {
      events.forEach((event) =>
        html.removeEventListener(event, handleoutsideEvent)
      );
      element.removeAttribute(outside, ""); /* 
      ++j;
      console.log("j =  " + j); */
      callback();
    }
  }
}
