import { Component, OnInit } from '@angular/core';
export {}; declare global { interface Window { Calendly: any; } } 

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor() { }

  ngOnInit() { 
    window.Calendly.initInlineWidget({
    url: 'https://calendly.com/17oogway04/consulation',
    parentElement: document.querySelector('.calendly-inline-widget')
   });
  }

}
