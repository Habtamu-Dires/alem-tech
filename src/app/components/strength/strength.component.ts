import { Component } from '@angular/core';
import { Strength } from '../../models/strength.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strength',
  imports: [CommonModule],
  templateUrl: './strength.component.html',
  styleUrl: './strength.component.css'
})
export class StrengthComponent {

  strengths: Strength[] = [
    {
      title: 'Expert Team',
      description: 'Seasoned developers and industry specialists.',
      iconUrl: '/expert-team.jpg'
    },
    {
      title: 'Cutting-Edge Tech',
      description: 'Leveraging AI, ML, and modern frameworks.',
      iconUrl: '/cutting-edge-tech.jpg'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored to your unique needs.',
      iconUrl: '/custom-solution.jpg'
    },
    {
      title: 'Proven Results',
      description: 'Trusted by businesses worldwide.',
      iconUrl: '/trophy.jpg'
    }
  ];
}
