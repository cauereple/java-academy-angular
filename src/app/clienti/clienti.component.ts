import { Component, OnInit } from '@angular/core';
import { ArticoliComponent } from '../articoli/articoli.component';
import { IClienti } from '../models/Clienti';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  tabellaClienti: IClienti[] = [
    {nome : 'Caue', cognome : 'Rizzo', codCliente : "001", eta : 27, dataNascita : new Date('12-27-1994'), durataNoleggio : 1.30, dataNoleggio : new Date('3-16-2020')},
    {nome : 'José', cognome : 'Eduardo', codCliente : "002", eta : 57, dataNascita : new Date('05-21-1957'), durataNoleggio : 0.30, dataNoleggio : new Date('3-15-2021')},
    {nome : 'Eliana', cognome : 'Mendes', codCliente : "003", eta : 59, dataNascita : new Date('05-09-1955'), durataNoleggio : 1.30, dataNoleggio : new Date('3-16-2020')}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
