import { HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export {}; declare global { interface Window { Calendly: any; } } 

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.page.html',
  styleUrls: ['./services-offered.page.scss'],
})
export class ServicesOfferedPage implements OnInit {

  imageUrl: string = 'assets/Minimalist Simple Client Services Welcome Packet_20240627_075439_0004-1.jpg'

  constructor() { }

  ngOnInit() {
  
  }

}
