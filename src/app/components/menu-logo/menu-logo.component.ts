import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-logo',
  imports: [],
  templateUrl: './menu-logo.component.html',
  styleUrl: './menu-logo.component.scss'
})
export class MenuLogoComponent {
  menu: string[] = ["FEATURES", "PRICING", "CONTACT"];
}
