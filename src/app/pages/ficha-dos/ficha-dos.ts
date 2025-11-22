import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-dos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ficha-dos.html',
  styleUrl: './ficha-dos.scss'
})
export class FichaDosComponent implements OnInit {
  
  
  private route = inject(ActivatedRoute);

  
  fichaId: string | null = null; 

  ngOnInit() {
    
    this.fichaId = this.route.snapshot.paramMap.get('id');

   
  }
}