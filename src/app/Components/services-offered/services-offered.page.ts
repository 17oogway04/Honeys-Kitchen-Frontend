import { Component, OnInit } from '@angular/core';
export {}; declare global { interface Window { Calendly: any; } } 

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.page.html',
  styleUrls: ['./services-offered.page.scss'],
})
export class ServicesOfferedPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // window.Calendly.initPopupWidget({
    //   url: 'https://calendly.com/17oogway04/catering',
    //   parentElement: document.querySelector('.calendly-badge-widget'),
    // });
  }

}
