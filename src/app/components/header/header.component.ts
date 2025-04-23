import { Component } from '@angular/core';
import { MenuLogoComponent } from "../menu-logo/menu-logo.component";

@Component({
  selector: 'app-header',
  imports: [MenuLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
