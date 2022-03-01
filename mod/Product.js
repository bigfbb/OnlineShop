export class Product {
  constructor(name, img, price, quantity) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.quantity = quantity;
  }
  updateQuantity(num) {
    if (this.quantity === 0) {
      alert('Sorry! There is no more from this product right now , come back later!')
      num = 0;
    }
    return this.quantity -= num;
  }
}