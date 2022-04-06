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
//let coral = [];

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

  //create inital coral reef
  while (reef.length < 10) {
    let coral = {
      x: random(width),
      y: random(height),
      r: random(50, 200),
    };

    let overlapping = false;

    for (let j = 0; j < reef.length; j++) {
      // if two corals overlap eachother, set overlap to true
      let other = reef[j];
      let d = dist(coral.x, coral.y, other.x, other.y);
      if (d < coral.r + other.r) {
        overlapping = true;
      }
    }
    // if the coral spawn where the text will be, set overlap = true
    if (
      coral.x >= width / 6 &&
      coral.x <= width - width / 6 &&
      coral.y >= height / 2 - 100 - coral.r &&
      coral.y <= height / 2 + 100 + coral.r
    ) {
      overlapping = true;
    }

    if (!overlapping) {
      reef.push(coral);
    }
  }

  for (var i = 0; i < reef.length; i++) {
    reef[i] = createCoral(reef[i].x, reef[i].y, reef[i].r);
  }
}

/**
creates a new coral object and sets it's parameters
*/
function createCoral(x, y, radius) {
  let coral = new Coral(
    (x = x), //random(200, width-200),//x,
    (y = y), //random(200, height - 200),//y,
    (radius = radius)
  );
  return coral;
}

/**
Description of draw()
*/
function draw() {
  background(250, 236, 222, 255);

  //draw the coral reef
  for (let i = 0; i < reef.length; i++) {
    reef[i].setup();
    reef[i].draw();
  }

  textDisplay = `${textJson.line[lineNum]}`;
  fill(130, 124, 255);
  textFont("Space Mono");
  textAlign(CENTER, CENTER);


  if (state === "intro") {
    if (lineNum === 0) {
      push();
      textSize(50);
      text(textDisplay, width / 2, height / 2);
      textSize(35);
      text("begin", width - 70, height - 30);
      pop();
    } else if (lineNum === 1) {
      push();
      textSize(22);
      text(textDisplay, width / 2, height / 2);
      pop();
    } else {
      push();
      textSize(18);
      textAlign(LEFT, CENTER);
      text(textDisplay, width / 5, height / 2);
      pop();
    }

    // display the "next" and "back" text
    if (lineNum > 0) {
      push();
      textSize(35);
      text("next", width - 70, height - 30);
      text("back", 70, height - 30);
      pop();
    }
  }


}

function mousePressed() {
  if (state === "intro") {
    if (mouseX > width / 2) {
      lineNum++;
      console.log(lineNum);

      //   if (lineNum === 5) {
      //     let corals = createCoral(100, height / 3, 100);
      //     reef.push(corals);
      //   } else if (lineNum === 6) {
      //     let corals = createCoral((2 * width) / 3, height - 200, 75);
      //     reef.push(corals);
      //   } else if (lineNum === 7) {
      //     let corals = createCoral((2 * width) / 3, height, 100);
      //     reef.push(corals);
      //   }
    } else if (mouseX < width / 2 && lineNum > 0) {
      lineNum--;
      console.log(lineNum);
    }
  }

  // let corals = createCoral(mouseX, mouseY);
  // reef.push(corals);
}
