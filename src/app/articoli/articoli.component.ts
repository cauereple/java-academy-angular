import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli = [
    {codart : '014600301', descrizione : 'BARILLA FARINA 1 KG', um : 'PZ', pzcart : 24, peso : 1, prezzo : 1.09,},
    {codart : '012405311', descrizione : 'BARILLA PASTA GR.500 N.70 1/2 PENNE', um : 'PZ', pzcart : 30, peso : 0.5, pezzo : 1.29},
    {codart : '012453921', descrizione : 'FINDUS FIOR DI NASELLO 300 GR', um : 'PZ', pzcart : 8, peso : 0.3, pezzo : 2.49},
    {codart : '012431123', descrizione : 'FINDUS CROCCOLE 400 GR', um : 'PZ', pzcart : 12, peso : 0.4, pezzo : 5.97},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
