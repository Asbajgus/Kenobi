function changeTextAndImage(color, tekst, textSize, textColor, imageSrc) {
    document.getElementById('text').style.background = color;
    document.getElementById('text').innerHTML = tekst;
    document.getElementById('text').style.fontSize = textSize;
    document.getElementById('text').style.color = textColor;
    document.getElementById('image').src = imageSrc;
}

function kenobi() {
    changeTextAndImage('blue', 'Hello there!!', '20px', 'white', 'Obi-Wan.jpg');
}

function griveous() {
    changeTextAndImage('red', 'General Kenobi', '30px', 'black', 'Griveous.png');
}