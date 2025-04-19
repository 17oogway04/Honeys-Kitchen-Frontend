import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { filter } from 'rxjs/operators';  // Import filter operator
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showHeader: boolean = true;

  constructor(private router: Router, private menu: MenuController, private userService: UserService) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showHeader = !event.urlAfterRedirects.includes('/signup');
    });
  }

  updatesComing(){
    window.alert("Updates coming soon for this feature!")
  }

  logout(){
    this.userService.logout()
    window.alert("Logout successfully")
  }
  async openMenu() {
    await this.menu.open('start');
  }

  async closeMenu() {
    await this.menu.close('start');
  }

}
