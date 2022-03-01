
const productDiv = document.querySelector("#product-div");
const sumDiv = document.querySelector("#sum-div");

class Bag {
  sum;
  constructor(product) {
    this.product = product;
    this.sum = 0;
  }
  addProduct(num) {
    let div = document.createElement("div");
    const name = document.createElement("p");
    const price = document.createElement("p");
    const btn = document.createElement("button");

    name.innerText = `${this.product[num].name}`;
    price.innerText = `${this.product[num].price}`;
    btn.innerText = "X";

    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(btn);
    productDiv.appendChild(div);
  }
  getTotal(num) {
    this.sum += this.product[num].price;
    sumDiv.innerText = this.sum;
  }
  deleteProduct(num) {
    return this.sum -= num
  }
  shop() {
    window.location.reload(true)
  }
}
export { Bag }