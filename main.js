var values = [],
    temp = [],
    rectWidth = 10;


Object.defineProperty(Array.prototype, 'shuffle', {
  value: function() {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
  }
});

Object.defineProperty(Array.prototype, 'compare', {
  value: function(array) {
    if (!array || this.length !== array.length) {
      return false;
    }
    for (var i = 0; i < this.length; i++) {
      if (this[i] instanceof Array && array[i] instanceof Array) {
        if (!this[i].compare(array[i])) {
          return false;
        }
      } else if (this[i] !== array[i]) {
        return false;
      }
    }
    return true;
  }
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 100; i++) values.push(floor(random(1, 150)));
  temp = Array.from(values);
  temp.sort((a, b) => a - b);
}

function draw() {
  background(0);
  rectMode(CENTER);
  strokeWeight(2);
  stroke(0);
  fill(255);
  for(let i = 0;i < values.length; i++)  rect(i * rectWidth + 100, height / 2, rectWidth, values[i] * 5);
  
  if(!values.compare(temp)) values.shuffle();
}
