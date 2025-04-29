import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  textButton: string = "LOGIN";

  buttonClick(): void {
    console.log('Botón clicado');
  }

}
