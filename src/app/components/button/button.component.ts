import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() textButton: string = '';
  @Input() customClasses: string | string[] = '';
  @Input() footerClass: string = '';
  
  buttonClick(): void {
    console.log('Botón clicado');
  }

}
