
import { Bag } from "./mod/Bag.js";
import { arr } from "./mod/fetch.js";

const sumDiv = document.querySelector("#sum-div");
const wrapper = document.querySelector("#wrapper");
const productDiv = document.querySelector("#product-div");
const buyBtn = document.querySelector('#buy-button');

let myBag = new Bag(arr);
wrapper.addEventListener("click", function (e) {
  switch (e.target.innerText) {
    case `Buy ${arr[0].name}`:
      myBag.addProduct(0);
      myBag.getTotal(0);
      document.querySelector('#my0').innerText = `Quantity: ${arr[0].updateQuantity(1)}`;
      break;
    case `Buy ${arr[1].name}`:
      myBag.addProduct(1);
      myBag.getTotal(1);
      document.querySelector('#my1').innerText = `Quantity: ${arr[1].updateQuantity(1)}`;
      break;
    case `Buy ${arr[2].name}`:
      myBag.addProduct(2);
      myBag.getTotal(2);
      document.querySelector('#my2').innerText = `Quantity: ${arr[2].updateQuantity(1)}`;
      break;
    case `Buy ${arr[3].name}`:
      myBag.addProduct(3);
      myBag.getTotal(3);
      document.querySelector('#my3').innerText = `Quantity: ${arr[3].updateQuantity(1)}`;
      break;
    case `Buy ${arr[4].name}`:
      myBag.addProduct(4);
      myBag.getTotal(4);
      document.querySelector('#my4').innerText = `Quantity: ${arr[4].updateQuantity(1)}`;
      break;
  }
});

productDiv.addEventListener("click", function (e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
    let elPrice = e.target.parentElement.firstElementChild.nextElementSibling.innerText;
    myBag.deleteProduct(elPrice)
    sumDiv.innerText -= elPrice
  }
});

buyBtn.addEventListener('click', () => myBag.shop());