class colorChange {
    div: Element;
    constructor( div: Element){
        this.div = div;
    }
    changeColor(color:string) : boolean {
        (<HTMLElement>this.div).style.backgroundColor = color;
        return true;
    }

}

interface ElementSet {
    div: Element;
    button: Element;
}
enum Colors {
  Green,
  Red,
  Blue,
  Orange
}
let elementSets : Array<ElementSet> = [];
let squareSizenum : number = 100;
let squareSize : string = `${squareSizenum}px`;

for (let index:number = 0; index < 4 ;index++)
{
    elementSets.push({'div': document.createElement('div'),
                      'button': document.createElement('button')})
}

elementSets.map( (elem, index) => {
    let colorChangeClass = new colorChange(elem.div);
    (<HTMLElement>elem.div).style.width = squareSize;
    (<HTMLElement>elem.div).style.height = squareSize;
    elem.button.textContent = "Change Color";
    (<HTMLElement>elem.button).onclick = (event) => {
        colorChangeClass.changeColor(Colors[index]);
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})


