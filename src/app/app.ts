import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { SidebarInteraction } from './components/sidebar-interaction/sidebar-interaction';
import { SidebarMenu } from './components/sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarInteraction,
    SidebarMenu
  ],
   
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('comunicacion_nicolas');
}