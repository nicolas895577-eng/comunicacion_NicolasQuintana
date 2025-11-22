import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NavigationService, MenuOption } from '../../services/navigation'; 

@Component({
  selector: 'app-sidebar-interaction',
  standalone: true,
 
  imports: [CommonModule], 
  templateUrl: './sidebar-interaction.html',
  styleUrl: './sidebar-interaction.scss'
})

export class SidebarInteraction { 
  
  private navService = inject(NavigationService);

  
  activeButton: string = 'home'; 


  homeOptions: MenuOption[] = [
    { label: 'Sena presentation', path: 'sena' },
    { label: 'Ficha 3066474', path: 'ficha/3066474' },
    { label: 'Ficha 3333333', path: 'ficha/3333333' },
    { label: 'Cuarta opción' }
  ];

  searchOptions: MenuOption[] = [
    { label: 'Search Config', path: 'search' },
    { label: 'Filtros avanzados' },
    { label: 'Historial' }
  ];

  htmlOptions: MenuOption[] = [
    { label: 'HTML Basics', path: 'html' },
    { label: 'Etiquetas Semánticas' },
    { label: 'DOM' }
  ];


  setHome() {
    this.activeButton = 'home';
    this.navService.updateData('Home', this.homeOptions);
  }

  setSearch() {
    this.activeButton = 'search';
    this.navService.updateData('Search', this.searchOptions);
  }

  setHtml() {
    this.activeButton = 'html';
    this.navService.updateData('HTML', this.htmlOptions);
  }
}