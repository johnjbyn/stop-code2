import { Component, Input } from '@angular/core';
import { GruppoColore } from '../../models/gruppo-colore';
import { ColoreDetailComponent } from '../colore-detail/colore-detail.component';

@Component({
  selector: 'app-colori-list',
  imports: [ColoreDetailComponent],
  templateUrl: './colori-list.component.html',
  styleUrl: './colori-list.component.css'
})
export class ColoriListComponent {
  @Input()
  gruppiColori: GruppoColore[] = [];

  toggleActive(gruppoIndex: number, coloreIndex: number) {
    const colore = this.gruppiColori[gruppoIndex].colori[coloreIndex];
    colore.active = !colore.active;
  }
}