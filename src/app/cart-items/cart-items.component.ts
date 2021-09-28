import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  products = this.cart.getProducts();
  sum: number;
  newPrice: number;
  shippingPrice = 7;
  totalPrice: number;

  constructor(private cart: CartService) { }

  // The ngOnInit() method will be triggered immdiately after we
  // call the cart-items component or after the component is rendered
  // So, whenever this component is renedered, ngOnInit() is the first
  // method that will get executed by default.

  // Scenario-1: The Subtotal should get updated right away when the user 
  // lands on the Cart page

  ngOnInit(): void {
    this.updateSum();
  }

  // Scenario-2: When the user changes the quantity of the products in the
  // cart page the subtotal should also get updated right away

  onKey(product, value) {

    // product.price(x.price) = original price
    // value * product.price = new price
    // sum = sum - original price + new price
    // total = sum + shipping price

    this.newPrice = value * product.price;
    this.sum = this.sum - product.price + this.newPrice;
    this.totalPrice = this.shippingPrice + this.sum;
  }

  // This function will get triggered when the user clicks
  // the Remove button by one of the products on the carts page 
  // and it will remove that product from the list

  deleteProduct(product) {

    // [0th index: Chemistry, 1st index: Metaphysics]
    // splice(): Its a built-in method for arrays
    // which can remove items from the array

    // indexOf() method returns the index of an item in 
    // the array

    const index = this.products.indexOf(product);

    this.products.splice(index, 1);

    this.updateSum();

  }

  // This function will get triggered when the user lands on the 
  // cart page or removes an item from the carts page and it will 
  // recalculate the Subtotal and the Total price values

  updateSum() {

    this.sum = 0;

    for (let i = 0; i < this.products.length; i++) {
      this.sum = this.sum + this.products[i].price;
    }

    this.totalPrice = this.sum + this.shippingPrice;
  }
}


