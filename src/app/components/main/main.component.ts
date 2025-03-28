import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { HeroComponent } from "../hero/hero.component";
import { ServicesComponent } from "../services/services.component";
import { StrengthComponent } from "../strength/strength.component";
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-main',
  imports: [CommonModule, HeaderComponent, FooterComponent, HeroComponent, ServicesComponent, StrengthComponent, ProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  selectedSection:string = 'Home';
  drawerShown:boolean = false;


  onSectionSelected(section:string){
    this.selectedSection = section;
    this.scrollToSection(section.toLocaleLowerCase());
  }

  onShawDrawer(showDrawer:boolean){
    this.drawerShown = showDrawer;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}
