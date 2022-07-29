function dotMove(event) {
  let dot = document.getElementById("dot");
  let x = event.offsetX;
  var y = event.offsetY;
  console.log(x);
  console.log(y);
  dot.style.transform = `translate(-1${x}%, ${y}%)`;
}

function dotReset(event) {
  let dot = document.getElementById("dot");
  dot.style.transform = `translate(-50%, -50%)`;
}

let word = document.getElementById("word");

word.addEventListener("onmousemove", dotMove);

word.addEventListener("onmouseout", dotReset);
