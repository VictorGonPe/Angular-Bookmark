import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { MenuLogoComponent } from "../menu-logo/menu-logo.component";
import { ButtonComponent } from "../button/button.component";
import { MenuMobileComponent } from "../menu-mobile/menu-mobile.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuLogoComponent, ButtonComponent, MenuMobileComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
