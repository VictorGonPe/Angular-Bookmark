import { Component } from '@angular/core';
import { ButtonComponent } from "../../ui/button/button.component";
import { MenuLogoComponent } from "../menu-logo/menu-logo.component";
import { SocialComponent } from "../../ui/social/social.component";

@Component({
  selector: 'app-footer',
  imports: [ButtonComponent, MenuLogoComponent, SocialComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
