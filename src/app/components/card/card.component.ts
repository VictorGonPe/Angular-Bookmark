import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  card: { [key: string]: { imageCard: string; p1: string; p2: string; } } = {
    chrome: {
      imageCard: "assets/img/logo-chrome.svg",
      p1: "Add to Chrome",
      p2: "Minimum version 62"
    },
    firefox: {
      imageCard: "assets/img/logo-firefox.svg",
      p1: "Add to Firefox",
      p2: "Minimum version 55"
    },
    opera: {
      imageCard: "assets/img/logo-opera.svg",
      p1: "Add to Opera",
      p2: "Minimum version 46"
    }
  };

  cardNames = Object.keys(this.card);
}
