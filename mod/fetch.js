import { Product } from './Product.js'

let url = "https://onlineshop-92a05-default-rtdb.europe-west1.firebasedatabase.app/.json";
let arr = [];
let productObj;
fetch(url)
  .then((r) => r.json())
  .then((d) => {
    for (let i = 0; i < d.length; i++) {
      arr.push(new Product(d[i].name, d[i].img, d[i].price, 10));
    }
    for (let i = 0; i < arr.length; i++) {
      productObj = new Product(arr[i].name, arr[i].img, arr[i].price, 10);
      let img = document.createElement("img");
      let h1 = document.createElement("h1");
      let h3 = document.createElement("h3");
      let h5 = document.createElement("h5");
      h5.id = `my${i}`
      let btn = document.createElement("button");
      let div = document.createElement("div");

      img.src = productObj.img;
      h1.innerHTML = productObj.name;
      h3.innerHTML = `Price: ${productObj.price}`;
      h5.innerHTML = `Quantity: ${productObj.quantity}`;
      btn.innerText = `Buy ${productObj.name}`;

      div.appendChild(img);
      div.appendChild(h1);
      div.appendChild(h3);
      div.appendChild(h5);
      div.appendChild(btn);
      wrapper.appendChild(div);
    }
  });




export { arr };