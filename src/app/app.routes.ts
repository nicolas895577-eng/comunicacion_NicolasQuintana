import { Routes } from '@angular/router';
import { SenaPresentation } from './pages/sena-presentation/sena-presentation'; 
import { FichaUnoComponent } from './pages/ficha-uno/ficha-uno'; 
export const routes: Routes = [
  
  { path: '', redirectTo: 'sena', pathMatch: 'full' },
  { 
    path: 'sena', 
    component: SenaPresentation 
  },
  { 
    path: 'ficha/:id', 
    component: FichaUnoComponent 
  },
  { path: '**', redirectTo: 'sena' }
];