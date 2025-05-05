import { Component } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-f-a-question',
  standalone: true,
  imports: [AccordionComponent, ButtonComponent],
  templateUrl: './f-a-question.component.html',
  styleUrl: './f-a-question.component.scss'
})
export class FAQuestionComponent {

}
