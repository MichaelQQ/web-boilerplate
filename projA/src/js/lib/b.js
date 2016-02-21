function setRed() {
    document.body.style.color = "red";
}

function setBigFont() {
    document.body.style.fontSize = "3em";
}

var api = {
    setRed: setRed,
    setBigFont: setBigFont
};

module.exports = api;
