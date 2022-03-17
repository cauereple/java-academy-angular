import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

autenticatoLink = false;

  electricBike = [
    {codart : '146003004', descrizione : 'BICI VIPER2000', raggioR : 28, colore : "blu", batteria : 6, costo_no : 1.20},
    {codart : '124053114', descrizione : 'BICI 500', raggioR : 27, colore : "rossa", batteria : 8, costo_no : 0.70},
    {codart : '124539224', descrizione : 'BICI DA CITTÀ', raggioR : 27, colore : "verde", batteria : 10, costo_no : 0.50}
  ]

  electricRoller = [
    {codart : '214600305', descrizione : 'ROLLER VELOCE', marca : 'Viper', colore : "nero", batteria : 4, vMax : 60, costo_no : 1.50},
    {codart : '212405315', descrizione : 'ROLLER PISTE', marca : 'Street', colore : "giallo", batteria : 5, vMax : 40, costo_no : 2}
  ]

  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<this.electricBike.length; i++) {
      if(this.electricBike[i].batteria >= 6)
        for(let j=0; j<this.electricRoller.length; j++)
          if(this.electricRoller[j].batteria >= 4)
            this.autenticatoLink = true;
    }
  }
}
