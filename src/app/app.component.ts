import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COLORI } from "./colori-dati";
import { GruppoColore } from "./models/gruppo-colore";
import { ColoriListComponent } from "./components/colori-list/colori-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColoriListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blocchi-colore';

  dati: GruppoColore[] = COLORI;
}