import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})

export class FeaturesComponent {
  selectedTab = 'bookmarking';

  tabs: { [key: string]: {img: string, title: string, description: string} } = {
    bookmarking: {
      img: 'assets/img/illustration-features-tab-1.svg',
      title: 'Bookmark in one click',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    searching: {
      img: 'assets/img/illustration-features-tab-2.svg',
      title: 'Intelligent search',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    sharing: {
      img: 'assets/img/illustration-features-tab-3.svg',
      title: 'Share your bookmarks',
      description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
  };

  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }
}