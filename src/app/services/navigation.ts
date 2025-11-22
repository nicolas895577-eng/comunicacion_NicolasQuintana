import { Injectable, signal } from '@angular/core';

export interface MenuOption {
  label: string;
  path?: string; // Opcional, porque algunos botones son solo visuales
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  
  currentTitle = signal<string>('Home');

 
  currentOptions = signal<MenuOption[]>([
    
    { label: 'Sena presentation', path: 'sena' },
    { label: 'Ficha 3066474', path: 'ficha/3066474' },
    { label: 'Ficha 3333333', path: 'ficha/3333333' },
    { label: 'Cuarta opción' }
  ]);

  
  updateData(title: string, options: MenuOption[]) {
    this.currentTitle.set(title);
    this.currentOptions.set(options);
  }
}