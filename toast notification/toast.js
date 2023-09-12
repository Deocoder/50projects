let toastBox = document.getElementById("toastBox")
let sucessMsg = ' <i class="fa fa-check-circle-o"></i> Successfully Submitted'
let errorMsg = ' <i class="fa fa-remove"></i> Please fix the error'
let invalidMsg =
  ' <i class="fa fa-exclamation-circle"></i> Invalid input, check again'

function showToast(msg) {
  let toast = document.createElement("div")
  toast.classList.add("toast")
  toast.innerHTML = msg
  toastBox.appendChild(toast)

  if (msg.includes("error")) {
    toast.classList.add("error")
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid")
  }

  setTimeout(() => {
    toast.remove()
  }, 5000)
}
