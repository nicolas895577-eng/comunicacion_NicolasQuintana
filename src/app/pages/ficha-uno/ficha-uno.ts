import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ficha-uno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ficha-uno.html',
  styleUrl: './ficha-uno.scss'
})
export class FichaUnoComponent {
  
 
  private route = inject(ActivatedRoute);

 
  fichaId = toSignal(
    this.route.params.pipe(
      map(params => params['id'])
    )
  );
}