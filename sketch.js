let color;
let colors;
let y;

function setup(){
    createCanvas(600,400);
    background(240);

    colors = [new Color(234,65,44),
        new Color(239,135,52),
        new Color(255,248,74),
        new Color(119,242,59),
        new Color(116,249,252),
        new Color(0,68,247),
        new Color(233,93,250),
        new Color(119,67,21),
        new Color(255,255,255),
        new Color(0,0,0)];

    color = new Color(0,0,0);
}

function draw(){

    //makes the painting 
    strokeWeight(10);
    if(mouseIsPressed){
        if(mouseX > 30 || mouseY > (colors.length+1)*25)
        {
            stroke(color.r,color.g,color.b);
            line(mouseX,mouseY,pmouseX,pmouseY);
        }
    }

    //creates color palette buttons
    stroke(240);
    strokeWeight(1);
    y=0;
    for(let i = 0;i < colors.length;i++){
        fill(colors[i].r,colors[i].g,colors[i].b);
        square(0,y,25);
        y+=25;
    }
}

function mousePressed(){
    //assigns color variable with appropriate value
    y=25;
    for(let i = 0; i < colors.length; i++){
        if(mouseX > 0 && mouseX < 25 && mouseY > y-25 && mouseY < y)
            color = colors[i];
        y+=25;
    }
}

class Color {
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
}