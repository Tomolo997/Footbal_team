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
        el.classList.remove(`footballShirt-4-2-4-${el.dataset.number}`);
        el.classList.remove(`footballShirt-3-5-2-${el.dataset.number}`);

        el.classList.remove(`footballShirt-4-3-3-${el.dataset.number}`);
        el.classList.add(`footballShirt-4-4-2-${el.dataset.number}`);
        console.log(el.classList.value);
        break;
      case "4-3-3":
        el.style.top = null;
        el.style.left = null;
        el.classList.remove(`footballShirt-3-5-2-${el.dataset.number}`);
        el.classList.remove(`footballShirt-4-2-4-${el.dataset.number}`);

        el.classList.remove(`footballShirt-4-4-2-${el.dataset.number}`);
        el.classList.add(`footballShirt-4-3-3-${el.dataset.number}`);

        break;
      case "3-5-2":
        el.style.top = null;
        el.style.left = null;
        el.classList.remove(`footballShirt-4-3-3-${el.dataset.number}`);
        el.classList.remove(`footballShirt-4-2-4-${el.dataset.number}`);

        el.classList.remove(`footballShirt-4-4-2-${el.dataset.number}`);
        el.classList.add(`footballShirt-3-5-2-${el.dataset.number}`);
        break;
      case "4-2-4":
        el.style.top = null;
        el.style.left = null;
        el.classList.remove(`footballShirt-4-3-3-${el.dataset.number}`);

        el.classList.remove(`footballShirt-4-4-2-${el.dataset.number}`);
        el.classList.remove(`footballShirt-3-5-2-${el.dataset.number}`);
        el.classList.add(`footballShirt-4-2-4-${el.dataset.number}`);
        break;
      default:
        break;
    }
  });
});

//add the players
const numbersOnTheBar = document.querySelectorAll(".numberOnShirt-input");

const numberOnTheShirt = document.querySelectorAll(".footbalNumber");
numberOnTheShirt.forEach((el) => {
  el.textContent = el.parentElement.parentElement.dataset.number;
});
//get spans

numbersOnTheBar.forEach((el) => {
  el.placeholder = numberOnTheShirt[el.dataset.number - 2].textContent;
});
numbersOnTheBar.forEach((el) => {
  console.log(el.dataset.number);
  el.addEventListener("keyup", function (e) {
    e.preventDefault();
    numberOnTheShirt[el.dataset.number - 2].textContent = el.value;
    console.log(numberOnTheShirt[el.dataset.number - 2]);
  });
});

//surnames on the shirt on the field
const surname = document.querySelectorAll(".footballName");

const surnameShirtBar = document.querySelectorAll(".surnameOnShirt-input");

surnameShirtBar.forEach((el) => {
  el.addEventListener("keyup", function (e) {
    surname[el.dataset.number - 2].textContent = el.value;
  });
});

//color picker
const styleDiv = document.querySelector(".style_div");
const colorShow = document.querySelector(".colorHidden");

const shirtColor = document.querySelector(".colorPicker");

shirtColor.addEventListener("input", function (e) {
  console.log(shirtColor.value);
  shirt.forEach((el) => (el.style.backgroundColor = shirtColor.value));
});
const numberColor = document.querySelector(".colorPicker-Numbers");
numberColor.addEventListener("input", function (e) {
  console.log(numberOnTheShirt.value);
  numberOnTheShirt.forEach((el) => (el.style.color = numberColor.value));
});

//positions of the goals
/*
const field = document.querySelector(".field__img");
console.log(field.width);
console.log(field.height);

allShirts.forEach((el) => {
  console.log(el.offsetLeft);
  if (el.offsetLeft < 400) {
    console.log(el.offsetTop);
    el.children[0].children[0].textContent = "CB";
  }
  if (el.offsetLeft < 400 && el.offsetTop < 100) {
    console.log(el.offsetTop);
    el.children[0].children[0].textContent = "LB";
  }
  if (el.offsetLeft < 400 && el.offsetTop > 500) {
    console.log(el.offsetTop);
    el.children[0].children[0].textContent = "RB";
  }
});
*/
