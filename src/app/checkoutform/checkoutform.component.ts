import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit {

  msg: string = "gmail.com";
  contact = new Contact();
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  // When someone clicks on the Submit button on the form 
  // this function receives all the object data as an argument  
  // from the form that the form collected from ng-form and 
  // then the function assigns those values in its own object. 

  submit(form) {
    console.log('Form Data');
    console.log(form);

    // Making our own object with the Form data that we received from Contact Form

    this.contact.firstName = form.firstName;
    this.contact.lastName = form.lastName;
    this.contact.email = form.email;

    window.alert("Cart is successfully submitted by " + this.contact.firstName);

    // After the user has clicked Submit we are setting submitted to True
    // so that the Checkout Form disspapears and gets replaced by the 
    // Thank You message. 

    this.submitted = true;
  }

}
