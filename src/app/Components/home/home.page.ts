import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  slideIndex = 1;
  intervalId: any;

  constructor() {}
  
  ngOnInit(){
    this.showSlides(this.slideIndex)
    this.startSlideshow();
  }

  ngOnDestroy(){
    if(this.intervalId){
      clearInterval(this.intervalId);
    }
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
    // const dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    // for (let i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(' active', '');
    // }

    slides[this.slideIndex - 1].style.display = 'block';
    // dots[this.slideIndex - 1].className += ' active';
  }

  startSlideshow(){
    this.intervalId = setInterval(() => {
      this.plusSlides(1);
    }, 5000);
  }

}
