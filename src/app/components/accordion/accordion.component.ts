import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() textP:string = '';
  @Input() answer:string = '';
  @Input() isFirst:boolean = false;

  isOpen: boolean = false;

  openAccordion() {
    this.isOpen = !this.isOpen;
  }
}
