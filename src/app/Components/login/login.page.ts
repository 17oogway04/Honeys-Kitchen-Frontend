import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string ='';
  loggedIn: boolean = false;
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit()
  {
    // this.userService.login(this.email, this.password).subscribe((response:any) => {
    //   window.alert("Logged in successfully");
    //   this.router.navigate(['/home']);
    //   this.loggedIn = true;
    // }, error => {
    //   console.log('Error: ', error);
    //   window.alert('Unsuccessful login');
    // })
    window.alert("This feature will be available soon!")
  }
}
