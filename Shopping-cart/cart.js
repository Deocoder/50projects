let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")
let basket = JSON.parse(localStorage.getItem("data")) || []

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount")
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
}

calculation()

const generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x
        let search = shopItemData.find((x) => x.id === id) || []
        return `
        <div class="cart-item">
            <img class="cart-img" src="${search.img}" alt="${search.name}">
             <div class="details">
                <div class="title-price-x">
                <h4 class="title-price">
                <p>${search.name}</p>
                <p class="cart-item-price">$${search.price}</p>
                </h4>
                 <i onclick="removeItem(${id})" class="fa fa-remove"></i>
                </div>

                    <div class="btn">
                        <i onclick="decrement(${id})" class="fa fa-minus"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="fa fa-plus"></i>
                    </div>

                <h3>$${item * search.price}</h3>
             </div>
        </div>
          `
      })
      .join(""))
  } else {
    shoppingCart.innerHTML = ``
    label.innerHTML = `
    <h1 class="label-h1">Cart is empty</h1>
    <a href="index.html">
    <button class="label-btn">Add items to cart</button>
    </a>
    `
  }
}

generateCartItems()

let increment = (id) => {
  let selectedItem = id
  let search = basket.find((x) => x.id === selectedItem.id)

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    })
  } else {
    search.item += 1
  }

  generateCartItems()

  update(selectedItem.id)

  localStorage.setItem("data", JSON.stringify(basket))
}

let decrement = (id) => {
  let selectedItem = id
  let search = basket.find((x) => x.id === selectedItem.id)

  if (search === undefined) return
  else if (search.item === 0) return
  else {
    search.item -= 1
  }

  update(selectedItem.id)

  basket = basket.filter((x) => x.item !== 0)
  generateCartItems()
  localStorage.setItem("data", JSON.stringify(basket))
}

let update = (id) => {
  let search = basket.find((x) => x.id === id)
  document.getElementById(id).innerHTML = search.item
  calculation()

  totalAmount()
}

let removeItem = (id) => {
  let selectedItem = id
  basket = basket.filter((x) => x.id !== selectedItem.id)
  generateCartItems()
  totalAmount()
  calculation()
  localStorage.setItem("data", JSON.stringify(basket))
}

let clearCart = () => {
  basket = []
  generateCartItems()
  calculation()
  localStorage.setItem("data", JSON.stringify(basket))
}

let totalAmount = () => {
  if (basket !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x
        let search = shopItemData.find((x) => x.id === id) || []
        return item * search.price
      })
      .reduce((x, y) => x + y, 0)
    label.innerHTML = `
    <h2>Total Bill :$ ${amount}</h2>
    <div>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeall">Clear cart</button>
    </div>
    <br>
    `
  } else return
}

totalAmount()
