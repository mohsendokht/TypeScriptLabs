
let color : string = "green";
let squareSizenum : number = 100;

let squareSize : string = `${squareSizenum}px`;
let button : Element = document.createElement('button');
let div : Element = document.createElement('div');

button.textContent = "Change Color";

let changeColor : Function = (elem: Element, color: string): boolean => {
    (<HTMLElement>elem).style.backgroundColor = color;
    return true;

};

(<HTMLElement>div).style.width = squareSize;
(<HTMLElement>div).style.height = squareSize;
(<HTMLElement>button).onclick = (event) => { changeColor(div,color);}

document.body.appendChild(button);
document.body.appendChild(div);
