const p5 = require('node-p5');
/*
function sketch(p) {
    p.setup = () => {
        let canvas = p.createCanvas(200, 200);
        setTimeout(() => {
            p.saveCanvas(canvas, 'myCanvas', 'png').then(filename => {
                console.log(`saved the canvas as ${filename}`);
            });
        }, 100);
    }
    p.draw = () => {
        p.background(50);
        p.text('hello world!', 50, 100);
    }
}
*/


// initialize all constants
const side = 1440;
const numSlices = 3;
const slice = side / numSlices;
const circleSize = side / (numSlices + 1);
const randomLimit = 100000;
const dir = 'images/';
const canvasName = getRandomInt(randomLimit).toString();

// helper function for random integer generation
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// create image
function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(side, side);
    p.colorMode(p.HSB);
    p.background(p.random(255), p.random(255), p.random(255));
    p.strokeWeight(0);
    p.noLoop();
    setTimeout(() => {
      p.saveCanvas(canvas, dir.concat(canvasName), 'jpg').then((filename) => {
        console.log(`saved the canvas as ${filename}`);
        // rest of functions are called here...
      });
    }, 100);
  };
  p.draw = () => {
    for (let i = 0; i < numSlices + 1; i++) {
      for (let j = 0; j < numSlices + 1; j++) {
        p.fill(p.random(255), p.random(255), p.random(255));
        p.stroke(0);
        p.circle(i * slice, j * slice, circleSize);
      }
    }
  };
}

let p5Instance = p5.createSketch(sketch);
