const fileinput = document.querySelector("input"),
  downloadBtn = document.querySelector("button")

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault() // form from submitting
  downloadBtn.innerText = "Downloading File...."
  fetchFile(fileinput.value)
})

function fetchFile(url) {
  //fecthing file and returning response as blob
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      // URL.createobject creates a url passesd object
      let tempUrl = URL.createObjectURL(file)
      let aTag = document.createElement("a")
      aTag.href = tempUrl
      aTag.download = url.replace(/^.[\\\/]/, "")
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()
      URL.revokeObjectURL(tempUrl)
      downloadBtn.innerText = "Download File"
    })
      .catch(() => {
        
      downloadBtn.innerText = "Download File"
      alert("Failed to download file! 😢")
    })
}
