//RESOLUTION
const width = 100;
const height = 100;

let mousedown = false;

// Create grid
let canvas = document.getElementById("pixelPainter");
for (let x = 0; x < width; x++) {
  for (let y = 0; y < height; y++) {
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

  let breakCanvas = document.createElement("br");
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
for (let x = 0; x < 8; x++) {
  let palette = document.createElement("div");
  palette.className = "palette";
  colorCanvas.appendChild(palette);
  palette.style.backgroundColor = colors[x];
  palette.addEventListener("click", function() {
    memory = this.style.backgroundColor;
    console.log(memory);
  });
}

// Custom color block
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
const clearButton = document.createElement("a");
const eraseButton = document.createElement("a");
const saveButton = document.createElement("a");
const loadButton = document.createElement("a");
let pixels = document.querySelectorAll(".pixel");
let savedPix = [];

operators.className = "operators";
document.body.appendChild(operators);

// clear
clearButton.href = "#"; // for button animation
clearButton.className = "btn btn-white btn-animation-1";
clearButton.innerHTML = "CLEAR";
operators.appendChild(clearButton);
clearButton.addEventListener("click", function() {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = "white";
  }
});

// erase
eraseButton.href = "#"; // for button animation
eraseButton.className = "btn btn-white btn-animation-1";
eraseButton.innerHTML = "ERASER";
operators.appendChild(eraseButton);
eraseButton.addEventListener("click", function() {
  memory = "white";
});

// save
saveButton.href = "#"; // for button animation
saveButton.className = "btn btn-white btn-animation-1";
saveButton.innerHTML = "SAVE";
operators.appendChild(saveButton);
saveButton.addEventListener("click", function() {
  for (let i = 0; i < pixels.length; i++) {
    savedPix[i] = pixels[i].style.backgroundColor;
    // savedPix.push(pixels[i].style.backgroundColor);
  }
});

// load
loadButton.href = "#"; // for button animation
loadButton.className = "btn btn-white btn-animation-1";
loadButton.innerHTML = "LOAD";
operators.appendChild(loadButton);
loadButton.addEventListener("click", function() {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = savedPix[i];
  }
});
// End of operators
