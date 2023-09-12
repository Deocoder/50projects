const inputBox = document.getElementById("inputbox")
const listConatiner = document.getElementById("list-conatiner")

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something !")
  } else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listConatiner.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }

  inputBox.value = ""
  saveData()
}

listConatiner.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked")
      saveData()
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove()
      saveData()
    }
  },
  false
)

function saveData() {
  localStorage.setItem("todoList", listConatiner.innerHTML)
}

function showTask() {
  listConatiner.innerHTML = localStorage.getItem("todoList")
}
showTask()

function todoKeyDown(event) {
 if (event.key === "Enter") {
  addTask()
 }
}

