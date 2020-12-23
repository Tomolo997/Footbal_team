const shirt = document.querySelectorAll(".footbalShirt");
const allShirts = document.querySelectorAll(".footbalTshirt");
// Make the DIV element draggable:

allShirts.forEach((el) => {
  dragElement(el);
});

dragElement(document.querySelector(".footbalShirt"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

///selecting the lineups

//selecting the select

const selectHtml = document.querySelector(".footballInside--selectingLineUp");
//shhirts shirt
selectHtml.addEventListener("change", function (e) {
  allShirts.forEach((el) => {
    console.log();
    switch (selectHtml.value) {
      case "4-4-2":
        el.style.top = null;
        el.style.left = null;
        el.classList.remove(`footballShirt-3-5-2-${el.dataset.number}`);

        el.classList.remove(`footballShirt-4-3-3-${el.dataset.number}`);
        el.classList.add(`footballShirt-4-4-2-${el.dataset.number}`);
        console.log(el.classList.value);
        break;
      case "4-3-3":
        el.style.top = null;
        el.style.left = null;
        el.classList.remove(`footballShirt-3-5-2-${el.dataset.number}`);

        el.classList.remove(`footballShirt-4-4-2-${el.dataset.number}`);
        el.classList.add(`footballShirt-4-3-3-${el.dataset.number}`);

        break;
      case "3-5-2":
        el.style.top = null;
        el.style.left = null;
        el.classList.remove(`footballShirt-4-3-3-${el.dataset.number}`);

        el.classList.remove(`footballShirt-4-4-2-${el.dataset.number}`);
        el.classList.add(`footballShirt-3-5-2-${el.dataset.number}`);
        break;
      default:
        break;
    }
  });
});
