//RESOLUTION
const width = 50;
const height = 50;

let mousedown = false;

// Create grid
let canvas = document.getElementById("pixelPainter");
for (x = 0; x < width; x++) {
  for (y = 0; y < height; y++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    canvas.appendChild(pixel);

    pixel.addEventListener("mousedown", function() {
      this.style.backgroundColor = memory;
      mousedown = true;
    });
    pixel.addEventListener("mouseover", function() {
      if (mousedown === true) {
        this.style.backgroundColor = memory;
      }
    });
    pixel.addEventListener("mouseup", function() {
      mousedown = false;
    });
  }

  let breakCanvas = document.createElement("BR");
  canvas.appendChild(breakCanvas);
} // End of creating grid

// BEGIN COLOR PALETTE
let colorCanvas = document.createElement("div");
colorCanvas.className = "colorCanvas";
let memory = "";
document.body.appendChild(colorCanvas);
const colors = [
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "purple",
  "white",
  "black"
];

// Palette array
for (x = 0; x < 8; x++) {
  let palette = document.createElement("div");
  palette.className = "palette";
  colorCanvas.appendChild(palette);
  palette.style.backgroundColor = colors[x];
  palette.addEventListener("click", function() {
    memory = this.style.backgroundColor;
    console.log(memory);
  });
}

// Add custom color block
const customColor = document.createElement("script");
customColor.src = "js/jscolor.js";
document.body.appendChild(customColor);

let customPalette = document.createElement("button");
customPalette.className = "jscolor {valueElement:null}";
colorCanvas.appendChild(customPalette);

customPalette.addEventListener("click", function() {
  memory = customPalette.style.backgroundColor;
});
// End of custom color block

// END COLOR PALETTE

// Operators
const operators = document.createElement("div");
const clearButton = document.createElement("button");
const eraseButton = document.createElement("button");

operators.className = "operators";
document.body.appendChild(operators);

// clear
clearButton.id = "clear";
clearButton.innerHTML = "CLEAR";
operators.appendChild(clearButton);
clearButton.addEventListener("click", function() {
  let pixels = document.querySelectorAll(".pixel");
  for (i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = "transparent";
  }
});

// erase
eraseButton.id = "erase";
eraseButton.innerHTML = "ERASER";
operators.appendChild(eraseButton);
eraseButton.addEventListener("click", function() {
  memory = "transparent";
});
// End of operators
