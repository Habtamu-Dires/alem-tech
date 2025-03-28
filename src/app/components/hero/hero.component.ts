import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Input() showDrawer:boolean = false;

  slogan:string = 'Innovative Software Solutions for a Smarter Future';
  description:string = 'Transforming industries with cutting-edge Smart Systems, e-commerce, Transportation & Logistics, and AI-driven technologies';
}
