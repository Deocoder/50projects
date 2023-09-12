const reviewcon = document.querySelector(".review-con")
const review = document.querySelector(".review")
const userimage = document.querySelector(".user-img")
const username = document.querySelector(".username")
const role = document.querySelector(".role")

const reviews = [
  {
    name: "divine",
    position: "ddd",
    photo: "https://images.unsplash.com/photo",
    Text: "gfhggggggggggggggggggggggggggggggggggggfhgfhbf",
  },
  {
    name: "hfhjh",
    position: "dfhn",
    photo: "https://images.unsplash.com/photo",
    Text: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
  },
  {
    name: "divie",
    position: "dd",
    photo: "https://images.unsplash.com/photo",
    Text: "f hgfhhhhhhhhhhhhhhh",
  },
]

let idx = 1

function updatereviews() {
  const { name, position, photo, Text } = reviews[idx]

  reviews.innerHTML = Text
  userimage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > reviews.length - 1) {
    idx = 0
  }
}

setInterval(updatereviews, 10000)
