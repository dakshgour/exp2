/* ===============================
   EXPERIMENT 2.1 - CHARACTER COUNTER
   =============================== */

let text = document.getElementById("text");
let count = document.getElementById("count");

if (text) {
  text.addEventListener("keyup", function () {

    // get full text (including spaces)
    let value = text.value;

    // count total characters
    let totalCharacters = value.length;

    // show count
    count.innerText = totalCharacters + " / 150 Characters";
  });
}


/* ===============================
   EXPERIMENT 2.2 - FILTER
   =============================== */

let select = document.getElementById("select");

if (select) {
  select.addEventListener("change", function () {

    let value = select.value;

    let electronics = document.getElementsByClassName("electronics");
    let fashion = document.getElementsByClassName("fashion");

    if (value === "electronics") {
      show(electronics);
      hide(fashion);
    }

    if (value === "fashion") {
      show(fashion);
      hide(electronics);
    }

    if (value === "all") {
      show(electronics);
      show(fashion);
    }
  });
}

function show(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "block";
  }
}

function hide(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
}

/* ===============================
   EXPERIMENT 2.3 - SVG DRAW
   =============================== */

let svg = document.getElementById("svg");
let draw = false;

if (svg) {

  svg.addEventListener("mousedown", function () {
    draw = true;
  });

  svg.addEventListener("mouseup", function () {
    draw = false;
  });

  svg.addEventListener("mousemove", function (e) {
    if (draw === true) {

      let circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

      circle.setAttribute("cx", e.offsetX);
      circle.setAttribute("cy", e.offsetY);
      circle.setAttribute("r", 3);
      circle.setAttribute("fill", "black");

      svg.appendChild(circle);
    }
  });
}
