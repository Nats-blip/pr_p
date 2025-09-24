import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-resume',
  standalone:true,
  imports: [CommonModule,RouterModule,Nav,Footer],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {

}
