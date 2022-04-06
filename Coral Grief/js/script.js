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

  //lineNum = 1;

  textDisplay = `${textJson.line[lineNum]}`;
   fill(130, 124, 255);
   textFont('Space Mono');
    textAlign(CENTER, CENTER);


   // fill(130, 124, 255);
   // noStroke();
   // textFont('Space Mono');
   // textSize(18);
   // textAlign(LEFT, CENTER);
   // text(textDisplay, width/4, height/2);

  if (state === "intro") {
    if (lineNum === 0){
      push();
      textSize(50);
      text(textDisplay, width / 2, height / 2);
      textSize(35);
      text("begin", width - 70, height - 30);
      pop();

    }
    else if (lineNum === 1){
      push();
      textSize(22);
      text(textDisplay, width / 2, height / 2);
      pop();
    }
    else {
      push();
      textSize(18);
      textAlign(LEFT, CENTER);
      text(textDisplay, width/6, height / 2);
      pop();
    }

    // display the "next" and "back" text
    if (lineNum > 0){
      push();
      textSize(35);
      text("next", width - 70, height - 30);
      text("back", 70, height - 30);
      pop();
    }


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
