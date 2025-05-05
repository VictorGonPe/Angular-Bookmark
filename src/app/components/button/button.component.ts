import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() textButton: string = '';
  
  buttonClick(): void {
    console.log('Botón clicado');
  }

}
