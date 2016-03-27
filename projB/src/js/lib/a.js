function setGreen() {
  document.body.style.color = 'green';
}

function setRed() {
  document.body.style.color = 'red';
}

function setBigFont() {
  document.body.style.fontSize = '3em';
}

var api = {
  setGreen: setGreen,
  setRed: setRed,
  setBigFont: setBigFont,
};

module.exports = api;
