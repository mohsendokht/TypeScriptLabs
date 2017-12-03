var color = "green";
var squareSizenum = 100;
var squareSize = squareSizenum + "px";
var button = document.createElement('button');
var div = document.createElement('div');
button.textContent = "Change Color";
var changeColor = function (elem, color) {
    elem.style.backgroundColor = color;
    return true;
};
div.style.width = squareSize;
div.style.height = squareSize;
button.onclick = function (event) { changeColor(div, color); };
document.body.appendChild(button);
document.body.appendChild(div);
