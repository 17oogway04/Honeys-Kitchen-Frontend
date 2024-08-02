import { Component, OnInit } from '@angular/core';
export {}; declare global { interface Window { Calendly: any; } } 

@Component({
  selector: 'app-consulation',
  templateUrl: './consulation.page.html',
  styleUrls: ['./consulation.page.scss'],
})
export class ConsulationPage implements OnInit {

  constructor() { }

  ngOnInit() { 
    window.Calendly.initInlineWidget({
    url: 'https://calendly.com/17oogway04/consulation',
    parentElement: document.querySelector('.calendly-inline-widget')
   });
  }
 

}
