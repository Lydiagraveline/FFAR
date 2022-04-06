/**
Project 2 Proposal - Coral Grief
Lydia Graveline

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// empty array to store all the generated coral
let reef = [];

// empty array to store new coral
let coral = [];

let state = "intro"; //can be intro,
let textJson;
let textDisplay;
let lineNum = 0;

function preload() {
  textJson = loadJSON(`assets/data/text.json`);
}
/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // create inital coral reef
  // for (let i = 0; i < 10; i++) {
  //   coral[i] = createCoral(random(100, width - 100), random(100, height - 100));
  //   coral[i].setup();
  //   reef.push(coral[i]);
  // }
}

/**
creates a new coral object and sets it's parameters
*/
function createCoral(x, y, radius) {
  let coral = new Coral(
    (x = x), //random(200, width-200),//x,
    (y = y), //random(200, height - 200),//y,
    (radius = random(50, 90))
  );
  return coral;
}

/**
Description of draw()
*/
function draw() {
  background(250, 236, 222, 255);

  textDisplay = `${textJson.line[lineNum]}`;

  if (state === "intro") {
    push();
    textSize(100);
    fill(130, 124, 255);
    textAlign(CENTER);
    text(textDisplay, width / 2, height / 2);

    textSize(25);
    text("next", width - 100, height / 2);

    pop();
  }

  // draw the coral reef
  // for (let i = 0; i < reef.length; i++) {
  //   reef[i].setup();
  //   reef[i].draw();
  // }
}

function mousePressed() {
  if (state === "intro") {
    if (mouseX > width / 2) {
      lineNum++;
    } else if (mouseX < width / 2 && lineNum > 0) {
      lineNum--;
    }
  }
  // let corals = createCoral(mouseX, mouseY);
  // reef.push(corals);
}
