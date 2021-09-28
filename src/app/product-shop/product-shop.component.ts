import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { Product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  x: Product;
  submitted = false;
  text: string = "Add to Cart";
  disabledButton = false;
  constructor(private route: ActivatedRoute, private cart: CartService) { }

  // The ngOnInit() method is to retrieve the product that the 
  // user has clicked on the product list page

  // ActivatedRoute is a service that can capture the URL of the product
  // page that the user has selected

  // This service can be injected into this component class by calling its
  // constructor. This process of injecting a service in the component
  // class is called Dependency Injection. This is a core Angular concept.

  ngOnInit(): void {
    // It captures the productID from the product page's URL and then places that ID on paramMap
    const routeParams = this.route.snapshot.paramMap
    const id = Number(routeParams.get("productId"));
    // Iterating through the products.ts JSON data file
    this.x = products.find(x => x.id === id);
  }

  // The ngOnInit() method will be triggered immdiately after we
  // call the ProductShopComponent or after the component is rendered
  // So, whenever this component is renedered, ngOnInit() is the first
  // method that will get executed by default.

  addToCart() {
    this.disabledButton = true;
    this.text = "Added to Cart";
    this.submitted = true;
    this.cart.addProductsToCart(this.x);
  }

}
