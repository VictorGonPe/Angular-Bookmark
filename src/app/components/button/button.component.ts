import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  textButton: string = "LOGIN";

  buttonClick(): void {
    console.log('Botón clicado');
  }

}
