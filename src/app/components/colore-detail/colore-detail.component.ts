import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Colore } from '../../models/colore';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-colore-detail',
  imports: [NgClass],
  templateUrl: './colore-detail.component.html',
  styleUrl: './colore-detail.component.css'
})
export class ColoreDetailComponent {
  @Input()
  colore?: Colore;

  @Output()
  cliccato = new EventEmitter<void>();

  onClick() {
    this.cliccato.emit();
  }
}