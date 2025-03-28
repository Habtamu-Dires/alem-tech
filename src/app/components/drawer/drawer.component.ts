import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DrawerItemComponent } from "../drawer-item/drawer-item.component";

@Component({
  selector: 'app-drawer',
  imports: [DrawerItemComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {

  @Input() selectedComponent:string = 'home';
  @Output() onComponentSelect = new EventEmitter<string>();
  @Input() onMobileView:boolean = false;

  constructor(){}

  selectComponent(component:string){
    this.onComponentSelect.emit(component);
  }

}
