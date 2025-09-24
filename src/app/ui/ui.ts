import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-ui',
  standalone:true,
  imports: [CommonModule,RouterModule,Nav,Footer],
  templateUrl: './ui.html',
  styleUrl: './ui.scss'
})
export class Ui {
  
  sampleCards = [
    {
      title: 'Card Primaria',
      text: 'Esta es una card con estilo primario',
      buttonText: 'Botón Primario',
      type: 'primary'
    },
    {
      title: 'Card Secundaria',
      text: 'Esta es una card con estilo secundario',
      buttonText: 'Botón Secundario',
      type: 'secondary'
    },
    {
      title: 'Card de Éxito',
      text: 'Esta es una card con estilo de éxito',
      buttonText: 'Botón de Éxito',
      type: 'success'
    },
    {
      title: 'Card de Peligro',
      text: 'Esta es una card con estilo de peligro',
      buttonText: 'Botón de Peligro',
      type: 'danger'
    }
  ];
}
