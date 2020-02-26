const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('input');

const arr = [];
const arrayProduct = [];
class Product {
   constructor(name, price, image, id) {
      this.name = name;
      this.price = price;
      this.image = image;
      this.id = id;
   }
   addToPage() {
      arrayProduct.push(ur1, ur2, ur3, ur4, ur1, ur2, ur3, ur4);
      let productList = '';

      // Promise.all(arrayProduct).then((res) => {
      //    res

      arrayProduct.forEach((product) => {
         productList += `<div id="products">
               <div class="prod1">
               <img src=${product.image} width="250px" alt="">
               <h2>${product.name}</h2>
               <h3>${product.price} kr</h3>
               <button id="btn_add" data-id= ${product.id}> Add to cart </button>
               </div>
               </div>`;
      });
      const products = document.getElementById('products');
      products.innerHTML = productList;
      return productList;
      // });
   }
}

class ShoppingCart {
   constructor(products) {
      this.products = products;
   }
   addProduct(product) {
      this.products.push(product);
   }
   removeProduct(product) {
      const arr = this.products.filter((item) => {
         return item.id !== product.id;
      });
      this.products = arr;
   }
   searchProduct(productName) {
      searchForm.addEventListener('submit', function(e) {
         e.preventDefault();
         searchInput = this.products.filter((product) => {
            if (product.name.includes(productName.name)) {
               console.log(product);
            }
         });

         Product(productName);
         return product;
      });

      // Product(productName);
      // const searchInput = this.products.filter((product) => {
      //    if (product.name.includes(productName.name)) {
      //    }
      // });
   }
   getTotal() {
      const totalPrice = this.products.reduce((total, product) => {
         return total + product.price;
      }, 0);
      return totalPrice;
   }
   renderProducts() {
      let cart = '';
      cart += `
      <div class="title">
      Shopping Bag
      </div>`;
      this.products.forEach((product) => {
         cart += `<div class="item">
            <div class="buttons">
            <span class="delete-btn"><img src="https://img.icons8.com/wired/64/000000/delete-forever.png" width="25px"></span>
            <span class="like-btn"></span>
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

   getUser() {
      // Implement functionality here
      // fetch("https://jsonplaceholder.typicode.com/users/1")
      // .then(value => value.json())
      // .then(value => {
      //     li.innerHTML = `User name: ${value.name}<hr>`;
      // })
      // .catch(err => {
      //     li.innerHTML = `Can not display user name due to this error:<span class="error"</span> ${err} <hr>`;
      // });
   }
}

const ur1 = new Product('CERTINA', 5000, 'image/ur5.jpg', (id = 1));
const ur2 = new Product('BREGUET', 7000, 'image/ur2.jpg', (id = 2));
const ur3 = new Product('flat-screen', 2000, 'image/ur4.jpg', (id = 3));
const ur4 = new Product('flat-screen', 4000, 'image/ur1.jpg', (id = 4));

const shoppingCart = new ShoppingCart(arr);
const products = new Product();
console.log(arrayProduct);
console.log(arr);

products.addToPage(arrayProduct);
//shoppingCart.addProduct(ur3);
// shoppingCart.addProduct(ur2);
// shoppingCart.addProduct(ur1);

document.querySelector('#products').addEventListener('click', (e) => {
   console.log(e);
   if (e.target.id == 'btn_add') {
      console.log('CLICKED');
      console.log(products);

      shoppingCart.addProduct(e);
   }
   shoppingCart.renderProducts();
});
const totalPrice = shoppingCart.getTotal();
console.log(totalPrice);

//const root = document.getElementById('root');
//root.appendChild(shoppingCart.renderProducts());
