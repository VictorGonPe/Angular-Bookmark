import { Component } from '@angular/core';
import { MenuLogoComponent } from "../menu-logo/menu-logo.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  imports: [MenuLogoComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
