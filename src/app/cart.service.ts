import { Injectable } from '@angular/core';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = []
  constructor() { }

  // All the products that the user will be adding to the 
  // cart, this function will store those products in this 
  // array.

  addProductsToCart(product) {
    this.products.push(product);
  }

  // Later when we will develop the cart component
  // in that component we can call this array and 
  // in that component we can display all the products

  // This function will call the products array. Once it
  // is filled with the products, we will call this function
  // in the cart component. 

  getProducts() {
    return this.products;
  }

  // This function will be triggered when the user
  // clicks the Clear button on the cart page which will
  // empty the array,

  clearCart() {
    this.products = [];
  }
}
