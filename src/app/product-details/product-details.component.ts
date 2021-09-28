import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title: string = "NASIF'S ACADEMY"   // String property
  products: Product[] = products;     // Array property
  isUnchanged = true;                 // Boolean property

  constructor() { }

  ngOnInit(): void {
  }

  // This method opens up the Alert pop up on being triggered.

  clickMe(x: Product) {                 // Defining an Alert method
    window.alert(x.name + ' Course vidoes are available in your location to purchase!');
  }

  // This method enables and disables the "Check Availability" button on being triggered. 

  enableBuying() {
    this.isUnchanged = !this.isUnchanged;
  }

}
