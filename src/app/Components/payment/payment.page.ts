import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  isFormVisible = false
  constructor() { }

  ngOnInit() {
  }
  openForm(){
    this.isFormVisible = true;
  }
  closeForm(){
    this.isFormVisible = false;
  }
}
