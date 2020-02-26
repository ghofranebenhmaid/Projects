const shopList = [];
const arrayProduct = [];

class Product {
   constructor(name, price, image, id) {
      this.name = name;
      this.price = price;
      this.image = image;
      this.id = id;
   }
   addToPage() {
      arrayProduct.push(ur1, ur2, ur3, ur4, ur5, ur6);
      let productList = '';

      Promise.all(arrayProduct).then((res) => {
         res.forEach((product) => {
            productList += `
            <div id="products">
               <div class="prod1">
               <img src=${product.image} width="250px" alt="">
               <h2>${product.name}</h2>
               <h3>${product.price},- kr</h3>
               <button id="btn_add" data-id = ${product.id}> Add to cart </button>
               </div>
               </div>`;
         });
         const products = document.getElementById('products');
         products.innerHTML = productList;
         return productList;
      });
   }
}
const products = new Product();

const ur1 = new Product('CERTINA DS-8 ', 5000, 'image/ur1.jpg', (id = 1));
const ur2 = new Product('BREGUET', 7000, 'image/ur2.jpg', (id = 2));
const ur3 = new Product('CERTINA DS', 2000, 'image/ur3.jpg', (id = 3));
const ur4 = new Product('THE LONGINES', 1600, 'image/ur4.jpg', (id = 4));
const ur5 = new Product('JAQUET', 2900, 'image/ur5.jpg', (id = 5));
const ur6 = new Product('MIDO', 3700, 'image/ur6.jpg', (id = 6));

class ShoppingCart {
   constructor(products) {
      this.products = products;
   }
   addProduct(product) {
      this.products.push(product);
   }
   removeProduct(product) {
      const shopList = this.products.filter((item) => {
         return item.id !== product.id;
      });
      this.products = shopList;
   }
   getTotal() {
      const totalPrice = this.products.reduce((total, product) => {
         return total + product.price;
      }, 0);
      return totalPrice;
   }
   searchProduct() {
      const searchForm = document.querySelector('.search-form');

      searchForm.addEventListener('submit', function(e) {
         e.preventDefault();

         let input = input_product.value;
         console.log(input);
         let List = '';
         arrayProduct.filter((product) => {
            if (product.name.toUpperCase().includes(input.toUpperCase())) {
               console.log(product);

               List += `
             <div id="products">
                <div class="prod1">
                <img src=${product.image} width="250px" alt="">
                <h2>${product.name}</h2>
                <h3>${product.price},- kr</h3>
                <button id="btn_add" data-id = ${product.id}> Add to cart </button>
                </div>
                </div>`;

               const products = document.getElementById('products');
               products.innerHTML = List;
               return List;
            }
         });
      });
   }

   renderProducts() {
      let cart = '';
      cart += `
      <div class="tr"></div>
      <div class="title">
      Shopping Bag
      </div>`;
      this.products.forEach((product) => {
         cart += `<div class="item">
            <div id="deleteBtn" data-id= ${product.id} class="buttons">
            <span><img src="https://img.icons8.com/wired/64/000000/delete-forever.png" width="25px"></span>
            </div>
            
            <div class="image">
            <img src=${product.image} alt="" />
            </div>
            
            <div class="description">
            <span>${product.name}</span>
            <span>Bball High</span>
            <span>White</span>
            </div>
            
            <div class="quantity">
            <button class="plus-btn" type="button" name="button">
            <img src="" alt="" />
            </button>
            <input type="text" name="name" value="1">
            <button class="minus-btn" type="button" name="button">
            <img src="" alt="" />
            </button>
            </div>
            
            <div class="price">${product.price} kr</div>
            </div>
          `;
      });
      cart += `
      <div class="total-price">
      <div>Total Price: </div>
      <div>${totalPrice} kr</div>
      </div>`;
      const root = document.getElementById('root');
      root.innerHTML = cart;
      return root;
   }
}
const shoppingCart = new ShoppingCart(shopList);
products.addToPage();

let totalPrice = shoppingCart.getTotal();
let count = 0;

const countShop = document.querySelector('.count');
document.querySelector('#products').addEventListener('click', (e) => {
   if (e.target.id === 'btn_add') {
      let id = e.target.dataset.id;

      arrayProduct.forEach((item) => {
         if (item.id == id) {
            shoppingCart.addProduct(item);
            totalPrice += item.price;
            count += 1;
         }
      });
      countShop.innerHTML = count;
   }

   shoppingCart.renderProducts();
});

shoppingCart.searchProduct();

const btn = document.querySelector('#btn');
const element = document.querySelector('#root');
btn.addEventListener('click', () => {
   console.log('kk');

   if (element.style.display === 'none') {
      element.style.display = 'block';
   } else {
      element.style.display = 'none';
   }
});

// let dlt = document.querySelector('.item');
// dlt.addEventListener('click', (e) => {
//    if (e.target.id === 'delete-btn') {
//       let id = e.target.dataset.id;
//       console.log(e);

//       shopList.forEach((item) => {
//          if (item.id == id) {
//             shoppingCart.removeProduct(item);
//             totalPrice -= item.price;
//             count -= 1;
//          }
//       });
//    }
// });
