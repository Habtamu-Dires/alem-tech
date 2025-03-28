import { Component, Input } from '@angular/core';
import { Service } from '../../models/service.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  @Input() showDrawer: boolean = false;

  services: Service[] = [
    {
      name: 'Smart Websites',
      imageUrl: '/smart-website.jpg',
      description: 'From static websites to intelligent ERPs, we craft digital solutions that streamline and automate your business operations. Integrated with cutting-edge Large Language Models (LLMs), our smart systems offer intuitive chatbots and automation tools to enhance user experiences and optimize workflows—empowering your business with efficiency and innovation.',
      tone: 'Forward-thinking, tech-savvy, and user-focused.'
    },
    {
      name: 'AI & Data Science',
      imageUrl: '/ai-&-datascience.jpg',
      description: 'Unlock the power of your data with our AI and data science expertise. We visualize, analyze, and deliver actionable insights to drive informed decisions. Our team builds robust data pipelines and develops custom machine learning models tailored to your needs, transforming raw data into a strategic asset for growth.',
      tone: 'Analytical, innovative, and results-driven.'
    },
    {
      name: 'E-commerce Solutions',
      imageUrl: '/e-commerce.jpg',
      description: 'We build powerful, user-friendly e-commerce platforms that connect buyers and sellers effortlessly. Whether it’s intellictaul properties, handmade goods, agricultural products, our web apps are designed to scale, engage, and convert—delivering seamless shopping experiences for any industry',
      tone: 'Versatile, customer-centric, and dynamic'
    },
    {
      name: 'Transportation & Logistics',
      imageUrl: '/logistics.jpg',
      description: 'Revolutionize your logistics with our centralized systems designed to optimize transportation and supply chain operations. We create smart, data-driven solutions that unify critical information, enhance efficiency, and provide real-time visibility—giving you the edge in a fast-moving industry.',
      tone: 'Efficient, strategic, and cutting-edge'
    },
  ];
}
