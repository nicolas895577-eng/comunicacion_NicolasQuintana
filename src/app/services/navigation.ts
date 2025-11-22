import { Injectable, signal } from '@angular/core';

export interface MenuOption {
  label: string;
  path?: string; // Opcional, porque algunos botones son solo visuales
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  // Signal para el título actual (Home, Search, HTML)
  currentTitle = signal<string>('Home');

  // Signal para la lista de opciones del menú
  currentOptions = signal<MenuOption[]>([
    // Datos iniciales (Home)
    { label: 'Sena presentation', path: 'sena' },
    { label: 'Ficha 3066474', path: 'ficha/3066474' },
    { label: 'Ficha 3333333', path: 'ficha/3333333' },
    { label: 'Cuarta opción' }
  ]);

  // Método que llamarán los componentes para cambiar la info
  updateData(title: string, options: MenuOption[]) {
    this.currentTitle.set(title);
    this.currentOptions.set(options);
  }
}