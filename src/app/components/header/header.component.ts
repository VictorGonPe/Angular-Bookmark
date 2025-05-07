import { Component } from '@angular/core';
import { MenuLogoComponent } from "../menu-logo/menu-logo.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuLogoComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
