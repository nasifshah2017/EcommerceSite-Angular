import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Product } from 'src/product';


@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {
  @Input() x: Product = { // Input directive: Sending information from Parent (Product) to Child (Alert)
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    status: '',
    description: '',
    imgaddress: ''
  };
  @Input() isUnchanged = true;  // Receiving information from Parent (Product) component

  @Output() notify = new EventEmitter<Product>();  // Output directive: Sending custom event from Child (Alert) to Parent (Product)

  constructor() { }

  ngOnInit(): void {
  }

  /* clickMe() { // Defining an Alert method
     window.alert(this.x.name + ' Course vidoes are available in your location to purchase!');
   } */

  clickChildMe() {
    this.notify.emit(this.x)
  }

}
