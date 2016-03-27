import * as a from "./lib/a.js";

var setBackground = function setBackground() {
  document.body.style.backgroundColor = "white";
}();

document.getElementById('change').addEventListener('click', () => {
  a.setRed();
});
a.setGreen();
