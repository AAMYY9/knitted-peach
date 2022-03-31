setInterval(change_background, 1000 * 60 * 60);

function change_background() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 19 || n < 7) {
    document.getElementById('scrollable').className = "night";
  } else {
    document.getElementById('scrollable').className = "day";
  }
  console.log("test");
}

change_background();


//RAIIN LETTERS

let words = [];
let wordFall = setInterval(makeWord, 200);
let letters = ['y', 'a', 's', 's', 'q', 'u', 'e', 'e', 'n']

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Source Code Pro', 25);
  textAlign(CENTER, CENTER);
}

function draw() {
  clear();
  // background(0.5);
  textSize(15)

  for (var i = words.length - 1; i >= 0; i--) {
    words[i].display();
    words[i].move();

    if (words[i].isOffScreen()) {
      words.splice(i, 1);
    }
  }

  if ((keyIsPressed == true) && (key == 'y')) {
    fill(255,0,127);
    text('y', 150, 400);
  }

  if ((keyIsPressed == true) && (key == 'a')) {
    fill(255,0,127);
    text('a', 175, 400);
  }

  if ((keyIsPressed == true) && (key == 's')) {
    fill(255,0,127);
    text('s', 200, 400);
    text('s', 225, 400);
  }

  if ((keyIsPressed == true) && (key == 'q')) {
    fill(255,0,127);
    text('q', 250, 400);
  }

  if ((keyIsPressed == true) && (key == 'u')) {
    fill(255,0,127);
    text('u', 275, 400);
  }

  if ((keyIsPressed == true) && (key == 'e')) {
    fill(255,0,127);
    text('e', 300, 400);
    text('e', 325, 400);
  }

  if ((keyIsPressed == true) && (key == 'n')) {
    fill(255,0,127);
    text('n', 350, 400);
  }
}

function makeWord() {
  words.push(new Word());
  console.log(words.length);
}

class Word {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.speed = 1;
    this.l = random(letters);
    this.color = color(225,225,225);
  }

  move() {
    this.y += this.speed;
  }
  display() {

    fill(this.color);
    text(this.l, this.x, this.y);
  }
  // deletes letters offscreen
  isOffScreen() {
    if (this.y > height) {
      return true
    }
  }
}
//removes typed letters
function keyPressed() {
  removeLetter(key);
}

function removeLetter(letter) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].l === letter) {
      print(words[i].l);
      words.splice(i, 1);
      i--; //needed to keep looping array correctly
    }
  }
}

function getID() {
  var nodes = document.forms["get-text"].querySelectorAll("input[type='text']");
  var words = [].map.call(nodes, function(item) {
    return {name : item.name, value : item.value};
});

console.log(words);
for (let str of words) {
  console.log(str);
}

}
