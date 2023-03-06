console.log("gScript loaded!");

//if you wan to use async in script
/*
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)

}else{
    ready()
} */

//then creat a function called ready and add the variabled to initialize in it

//Remove an item from cart
let removeCartItemsButton = document.querySelectorAll(".btn-danger");
removeCartItemsButton.forEach((item) => {
  item.addEventListener("click", (event) => {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    //event.target.parentElement.parentElement.remove();
    updateCartTotal();
  });
});

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

//add an item to cart
let addToCartButtons = document.querySelectorAll(".shop-item-button");
addToCartButtons.forEach((item) => {
  item.addEventListener("click", (event) => {
    let buttonClicked = event.target;
    let shopItem = buttonClicked.parentElement.parentElement;
    //console.log(shopItem);
    let itemTitle = shopItem.querySelector(".shop-item-title").innerText;
    let itemPrice = shopItem.querySelector(".shop-item-price").innerText;
    let itemImage = shopItem.querySelector(".shop-item-image").src;
    addToCart(itemTitle, itemPrice, itemImage);
    updateCartTotal();
  });
});

function addToCart(title, price, image) {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  //test whether item is already in cart or not
  let cartItemsTest = document.querySelector(".cart-items");
  let cartItemTitles = cartItemsTest.querySelectorAll(".cart-item-title");

  for (var i = 0; i < cartItemTitles.length; i++) {
    if (cartItemTitles[i].innerText == title) {
      alert("item already in cart");
      return;
    }
  }
  // cartItemTitles.forEach((item) => {
  //   if (item.innerText === title) {
  //     alert("item already in cart");
  //     return;
  //   }
  // });

  let cartRowContents = `
    <div class="cart-item cart-column">
            <img
              class="cart-item-image"
              src="${image}"
              width="100"
              height="100"
            />
            <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">${price}</span>
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" />
            <button class="btn btn-danger" type="button">REMOVE</button>
          </div>
    `;
  cartRow.innerHTML = cartRowContents;
  let cartItems = document.querySelector(".cart-items");
  cartItems.append(cartRow);

  //add event listeners to the newly created element for remove qty and update cart total
  //remove cart  item
  let removeButtonNew = cartRow.getElementsByClassName("btn-danger")[0];
  removeButtonNew.addEventListener("click", removeCartItem);

  let qtyInputNew = cartRow.getElementsByClassName("cart-quantity-input")[0];
  qtyInputNew.addEventListener("change", updateCartTotal);
}

//Update cart total on input qty change
let qtyInputs = document.querySelectorAll(".cart-quantity-input");
qtyInputs.forEach((item) => {
  item.addEventListener("change", (event) => {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCartTotal();
  });
});

//Update cart total
function updateCartTotal() {
  let cartItemsContainer = document.querySelectorAll(".cart-items")[0];
  let cartRows = cartItemsContainer.querySelectorAll(".cart-row");

  let cartTotal = 0;
  cartRows.forEach((item) => {
    let priceElement = item.querySelector(".cart-price");
    let qtyElement = item.querySelector(".cart-quantity-input");

    let itemPrice = parseFloat(priceElement.innerHTML.replace("$", ""));
    let itemQty = qtyElement.value;

    cartTotal += itemPrice * itemQty;
  });

  let cartTotalElement = document.querySelector(".cart-total-price");
  console.log("Just Total ", cartTotal);
  console.log("Just Total * 100", cartTotal * 100);
  console.log("Math round", Math.round(cartTotal * 100) / 100);

  cartTotalElement.innerText = "INR " + Math.round(cartTotal * 100) / 100;
}
