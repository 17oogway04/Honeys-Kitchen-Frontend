import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
export {}; declare global { interface Window { Calendly: any; } } 

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  basicUrl: string = 'http://localhost:5268';
  profilePic: string = '';
  isAuthenticated: boolean = false;

  loggedInUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    profilePicture: '',
    phoneNumber: '',
    address: ''
  }
  file:any;

  constructor(private myUserService: UserService, private actRouter: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() { 
    window.Calendly.initInlineWidget({
    url: 'https://calendly.com/17oogway04/consulation',
    parentElement: document.querySelector('.calendly-inline-widget')
   });

   this.myUserService.getLorenByUsername('honey1bud@gmail.com').subscribe((response) => {
      this.loggedInUser = response;
      this.profilePic = this.loggedInUser.profilePicture ? `${this.basicUrl}${this.loggedInUser.profilePicture}` : '';
      
   })

   this.myUserService.getCurrentUser().subscribe((response) => {
    if(response != null){
        this.isAuthenticated = true;
      }
   })
  }
  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const file = files[0];
      this.myUserService.uploadProfilePicture(file).subscribe((response: any) => {
        this.file = URL.createObjectURL(file); // Temporarily display the image
        this.loggedInUser!.profilePicture = response.ProfilePictureUrl; // Update the user profile
      });
    }
 }

}
