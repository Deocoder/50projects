const filterBtn = document.querySelectorAll(".filter_btns button")
const filterableCards = document.querySelectorAll(".filterable_cards .card")

const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active")
  e.target.classList.add("active")

  // Iterate through cards
  filterableCards.forEach((card) => {
    // add "hide" class to hide card initially
    card.classList.add("hide")
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
        card.classList.remove("hide")
    }
  })
}

filterBtn.forEach((button) => button.addEventListener("click", filterCards))
