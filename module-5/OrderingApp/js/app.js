// FIGMA LINK: https://www.figma.com/file/SC27njsTrMOI3Q9cMziBgw/Mobile-Restaurant-Menu-(Copy)?node-id=0%3A1
// ? GOALS
/**
 * follow the design
 * render the menu options using JS
 * be able to add/remove items
 * payment modal where there must have be info
 */
// ? Extra goals
/**
 * Change the theme
 * Offer a discount if the user purchases over $N
 * Allow users to rate their experience after they pay
 */
import beerData from "./data.js";

let total = 0;
const productsToBuy = {};

// initializeObject
beerData.forEach((beer) => {
  const { name, price } = beer;
  productsToBuy[beer.name.toLowerCase()] = { name, price, amount: 0 };
});

render();

// Dock,Doppelbock,Stout
document.addEventListener("click", (e) => {
  if (e.target.dataset.add) {
    handleAddClick(e.target.dataset.add);
  } else if (e.target.dataset.dock) {
    handleRemove("dock");
  } else if (e.target.dataset.doppelbock) {
    handleRemove("doppelbock");
  } else if (e.target.dataset.stout) {
    handleRemove("stout");
  } else if (e.target.dataset.buyIt) {
    document.querySelector(".modal-container").style.display = "flex";
  } else if (e.target.dataset.modalBtn) {
    handleModal();
  } else {
    console.log("Outside click unu");
  }
});

function render() {
  let htmlHolder = "";

  beerData.forEach((beer) => {
    const { url, name, ingredients, price } = beer;

    htmlHolder += `
    <div class="items--item">
      <img src="./${url}" alt="${name + " image"}">

      <div class="desc">
        <p class="item-name">${name}</p>
        <p class="item-desc">${ingredients}</p>
        <p class="item-price">$${price}</p>
      </div>

      <div class="add-item" data-add="${name}">+</div>
    </div>
    `;
  });

  document.querySelector(".items").innerHTML = htmlHolder;
}

function handleAddClick(beerName = "") {
  switch (beerName.toLowerCase()) {
    case "dock":
      productsToBuy.dock.amount++;
      total += productsToBuy.dock.price;
      break;

    case "doppelbock":
      productsToBuy.doppelbock.amount++;
      total += productsToBuy.doppelbock.price;
      break;

    case "stout":
      productsToBuy.stout.amount++;
      total += productsToBuy.stout.price;
      break;

    default:
      console.log("Something went wrong wehn trying to handle the addClick");
      break;
  }
  console.log("Total is: ", total);

  // Update total
  document.getElementById("total-span").textContent = `$${total}`;
  renderNewItems();
}

function renderNewItems() {
  let castHtmlString = "";
  // using the data inside th global itemsToBuy, render the price thingy in the bottom
  for (const key in productsToBuy) {
    // if a has b, call a.b
    if (
      Object.hasOwnProperty.call(productsToBuy, key) &&
      productsToBuy[key].amount
    ) {
      const { name, price, amount } = productsToBuy[key];

      castHtmlString += `
        <div>
          <p>${name}</p>
          <button data-${name.toLowerCase()}="${price}">remove</button>
          <p class="total--item-price">$${price} x ${amount}</p>
        </div>`;
    }
  }

  document.querySelector(".total--rendering").innerHTML = castHtmlString;
}

function handleRemove(beerName = "") {
  total -= productsToBuy[beerName].amount * productsToBuy[beerName].price;
  productsToBuy[beerName].amount = 0;
  // Update total
  document.getElementById("total-span").textContent = `$${total}`;
  renderNewItems();
}

function handleModal() {
  const name = document.getElementById("name");
  const cardNum = document.getElementById("cardNum");
  const cvv = document.getElementById("cvv");

  name.classList.remove("invalid");
  cardNum.classList.remove("invalid");
  cvv.classList.remove("invalid");

  const validName = name.value.length > 2;
  const validCardNum = cardNum.value.length > 10;
  const validCvv = cvv.value.length === 3;

  if (!validName) {
    console.log("invalid name");
    name.classList.add("invalid");
  }
  if (!validCardNum) {
    console.log("invalid card number");
    cardNum.classList.add("invalid");
  }
  if (!validCvv) {
    console.log("Invalid cvv");
    cvv.classList.add("invalid");
  }
  if (validName && validCardNum && validCvv) {
    resetFormInputs(name, cardNum, cvv);
    // hidde modal
    document.querySelector(".modal-container").style.display = "none";
    modifyBuyBtn();
    removeAllCartItems();
  }
}

function resetFormInputs(formName, formCardNum, formCvv) {
  console.log("valid enough data");
  formName.value = "";
  formCardNum.value = "";
  formCvv.value = "";
}

function removeAllCartItems() {
  for (const key in productsToBuy) {
    // if a has b, call a.b
    if (
      Object.hasOwnProperty.call(productsToBuy, key) &&
      productsToBuy[key].amount
    ) {
      // removes item and renders changes
      handleRemove(productsToBuy[key].name.toLowerCase());
    }
  }
}

function modifyBuyBtn() {
  const morphBtn = document.querySelector(".total--btn");
  morphBtn.textContent = "Thank you for your patronage!";
  morphBtn.classList.add("morph");
}
