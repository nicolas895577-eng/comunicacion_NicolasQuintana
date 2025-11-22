import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router'; 
import { NavigationService, MenuOption } from '../../services/navigation'; 

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,

  imports: [CommonModule, RouterModule], 
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss'
})
export class SidebarMenu {
  
  
  private navService = inject(NavigationService);


  currentTitle = this.navService.currentTitle;
  menuOptions = this.navService.currentOptions;

 
  activeOption: MenuOption | null = null;

  constructor() {

    const initialOptions = this.menuOptions();
    if (initialOptions.length > 0) {
        this.activeOption = initialOptions[0];
    }
  }


  selectOption(option: MenuOption) {
    this.activeOption = option;
  }


  isActive(option: MenuOption): boolean {
    return this.activeOption === option;
  }
}