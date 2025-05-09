import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-logo',
  standalone: true,
  imports: [],
  templateUrl: './menu-logo.component.html',
  styleUrls: ['./menu-logo.component.scss']
})
export class MenuLogoComponent {
  @Input() isOpen: boolean = false;

  menu: { nameLink: string; link: string }[] = [
    { nameLink: 'FEATURES', link: '#' },
    { nameLink: 'PRICING', link: '#' },
    { nameLink: 'CONTACT', link: '#' }
  ];
}
