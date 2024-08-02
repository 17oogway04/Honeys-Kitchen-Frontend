import { Component,ViewChild, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-meal-prep',
  templateUrl: './meal-prep.page.html',
  styleUrls: ['./meal-prep.page.scss'],
})
export class MealPrepPage implements OnInit {

  @ViewChild('contactForm') contactForm!: NgForm;
  @ViewChild('contactForm', {static: true}) formElement!: ElementRef<HTMLFormElement>;
  constructor() { 
    emailjs.init("La1iMlI1CUOvEkAdd")
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.contactForm.valid) {
      // Access the native HTML form element
      const formElement = this.formElement.nativeElement as HTMLFormElement;

      emailjs.sendForm('service_bo2x2wi', 'template_hhia7kk', '#contactForm')
        .then((response) => {
          console.log('SUCCESS!', response);
          this.contactForm.resetForm();
        })
        .catch((error) => {
          console.error('FAILED...', error);
        });
    }
  }

}
