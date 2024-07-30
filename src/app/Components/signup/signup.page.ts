import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  newUser: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.userService.register(this.newUser).subscribe(() => {
      window.alert("Registration was successful");
      this.router.navigate(['home']);
    }, error => {
      window.alert("User Registration Error");
      console.log("Error: ", error)
    });
  }
}
