import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,Nav,Header,Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
