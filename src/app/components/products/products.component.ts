import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [
    {
      name: 'AlemEQub',
      thumbnailUrl: '/alem-equb.jpeg',
      description: 'A powerful suite of financial tools including payment gateways and fraud detection.',
      link: 'https://alem-equb.duckdns.org'
    },
    {
      name: 'Hotel Order Management System',
      thumbnailUrl: '/hotel-order.jpeg',
      description: 'An all-in-one solution for online learning, exams, and payments.',
      link: ''
    },
    {
      name: 'Smart Web Site',
      thumbnailUrl: '/solution-auto-key.png',
      description: 'Streamlined ERP for small and medium businesses.',
      link: 'https://soultion-auto-key-app-4ljjw.ondigitalocean.app/'
    }
  ];

  navigateToProduct(link: string): void {
    window.open(link, '_blank'); // Redirects to the product URL
  }
}
