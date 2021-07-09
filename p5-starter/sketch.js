function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(550, 550);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");

  let sec= second();
  let min=minute();
  let ho=hour();

  translate(width/2,height/2);
  rotate(-90);

  stroke("white");
  strokeWeight(8);

  stroke(0,255,228);
  let hArc=map(ho%12,0,12,0,180);
  arc(0, 0, 260, 260,0, hArc);
  
  
  
  push()
  rotate(hArc);
  line(0,0,125,0);
  pop();
  


stroke("blue");
let minArc=map(min,0,60,0,360);
arc(0, 0, 280, 280 , 0, minArc);


push()
rotate(minArc);
line(0,0,140,0);
pop();

stroke(255)
let secArc=map(sec,0,60,0,360);
arc(0, 0, 300, 300, 0, secArc);
noFill()

push()
rotate(secArc);
line(0,0,150,0);
pop();

push();
fill("yellow")
stroke("yellow")
strokeWeight(1);
rotate(90);
text("3", 170,0)
text("9", -170,0)
text("6", 10,190)
text(12, 0,-170)
textSize(30)
text("shaarb's ", -40,-240)
pop();

}
