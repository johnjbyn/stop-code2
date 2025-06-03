import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Colore } from '../../models/colore';

@Component({
  selector: 'app-colore-detail',
  imports: [CommonModule],
  templateUrl: './colore-detail.component.html',
  styleUrl: './colore-detail.component.css'
})
export class ColoreDetailComponent {
  @Input() colore!: Colore;
  @Output() cliccato = new EventEmitter<void>();

  onClicked() {
    this.cliccato.emit();
  }
}