import { GruppoColore } from './models/gruppo-colore';

export const COLORI: GruppoColore[] = [
  {
    nome: 'Rossi',
    colori: [
      { name: 'Rosso Chiaro', hex: '#ffcccc', active: false },
      { name: 'Rosso Medio', hex: '#ff6666', active: false },
      { name: 'Rosso', hex: '#ff0000', active: false },
      { name: 'Rosso Scuro', hex: '#cc0000', active: false }
    ]
  },
  {
    nome: 'Verdi',
    colori: [
      { name: 'Verde Chiaro', hex: '#ccffcc', active: false },
      { name: 'Verde Medio', hex: '#66ff66', active: false },
      { name: 'Verde', hex: '#00ff00', active: false },
      { name: 'Verde Scuro', hex: '#009900', active: false }
    ]
  },
  {
    nome: 'Blu',
    colori: [
      { name: 'Blu Chiaro', hex: '#ccccff', active: false },
      { name: 'Blu Medio', hex: '#6666ff', active: false },
      { name: 'Blu', hex: '#0000ff', active: false },
      { name: 'Blu Scuro', hex: '#000099', active: false }
    ]
  },
  {
    nome: 'Gialli',
    colori: [
      { name: 'Giallo Chiaro', hex: '#ffffcc', active: false },
      { name: 'Giallo Medio', hex: '#ffff66', active: false },
      { name: 'Giallo', hex: '#ffff00', active: false },
      { name: 'Giallo Scuro', hex: '#999900', active: false }
    ]
  }
];