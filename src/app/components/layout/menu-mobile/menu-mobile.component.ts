import { Component, EventEmitter, Output } from '@angular/core';
import { MenuLogoComponent } from "../menu-logo/menu-logo.component";
import { SocialComponent } from "../../ui/social/social.component";
import { ButtonComponent } from "../../ui/button/button.component";

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [MenuLogoComponent, SocialComponent, ButtonComponent],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {
  @Output() close = new EventEmitter<void>();

  emitClose() {
    this.close.emit();
  }
}
