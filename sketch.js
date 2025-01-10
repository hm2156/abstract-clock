let lastMinute = -1;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES); 
}

function draw() {
  background(30); 

  let h = hour();
  let m = minute();
  let s = second();

  let hourAngle = map(h % 12, 0, 12, 0, 360); 
  let minuteAngle = map(m, 0, 60, 0, 360);
  let secondAngle = map(s, 0, 60, 0, 360);


  translate(width / 2, height / 2);
  noFill();

  strokeWeight(12);
  stroke('orange');
  arc(0, 0, 300, 300, -90, hourAngle - 90);
  

  strokeWeight(10);
  stroke('skyblue');
  arc(0, 0, 250, 250, -90, minuteAngle - 90);


  strokeWeight(8);
  stroke('lightgreen');
  arc(0, 0, 200, 200, -90, secondAngle - 90);
 

  fill('white');
  noStroke();
  ellipse(0, 0, 10, 10);

  if (m !== lastMinute) {
    console.log(`minute: ${m}`);
    lastMinute = m;
  }
}
