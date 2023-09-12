const allskeleton = document.querySelectorAll(".skeleton")

window.addEventListener("load", function () {
    allskeleton.forEach(item => {
        item.classList.remove("skeleton")
    })
})