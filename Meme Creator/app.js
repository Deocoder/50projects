const imageFileInput = document.querySelector("#imageFileInput")
const topText = document.querySelector("#topText")
const bottomText = document.querySelector("#bottomText")
const canvas = document.querySelector("#meme")

let image

imageFileInput.addEventListener("change", () => {
  const imageDataUrl = URL.createObjectURL(imageFileInput.files[0])

  // IMG
  image = new Image()
  image.src = imageDataUrl

  image.addEventListener(
    "load",
    () => {
      updateMemeCanvas(canvas, image, topText.value, bottomText.value)
    },
    { once: true }
  )
})

topText.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topText.value, bottomText.value)
})

bottomText.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topText.value, bottomText.value)
})

function updateMemeCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d")
  const width = image.width
  const height = image.height
  const fontSize = Math.floor(width / 10)
  const yOffeset = height / 25

  //Update canvas background

  canvas.width = width
  canvas.height = height

  ctx.drawImage(image, 0, 0)

  // Prepare Text
  ctx.strokeStyle = "black"
  ctx.lineWidth = Math.floor(fontSize / 4)
  ctx.fillStyle = "white"
  ctx.textAlign = "center"
  ctx.lineJoin = "round"
  ctx.font = `${fontSize}px sans-serif`

  // Add top text
  ctx.textBaseline = "top"
  ctx.strokeText(topText, width / 2, yOffeset)
  ctx.fillText(topText, width / 2, yOffeset)

  // Add bottom text
  ctx.textBaseline = "bottom"
  ctx.strokeText(bottomText, width / 2, height - yOffeset)
  ctx.fillText(bottomText, width / 2, height - yOffeset)
}

// Add this code after your existing JavaScript code
const downloadButton = document.querySelector("#downloadButton");

downloadButton.addEventListener("click", () => {
  const memeDataURL = canvas.toDataURL("image/jpeg");
  const a = document.createElement("a");
  a.href = memeDataURL;
  a.download = "your_meme.jpg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

