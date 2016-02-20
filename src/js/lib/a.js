function setGreen() {
    document.body.style.color = "green";
}

function setBigFont() {
    document.body.style.fontSize = "3em";
}

var api = {
    setGreen: setGreen,
    setBigFont: setBigFont
};

module.exports = api;
