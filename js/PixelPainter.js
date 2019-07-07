//RESOLUTION
const width = 50;
const height = 50;

let canvas = document.getElementById("pixelPainter");

// Create grid
for (x = 0; x < width; x++) {
  for (y = 0; y < height; y++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    canvas.appendChild(pixel);
  }
  let breakCanvas = document.createElement("BR");
  canvas.appendChild(breakCanvas);
} // End of creating grid
