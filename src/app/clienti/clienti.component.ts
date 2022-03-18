import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/services/autentication.service';
import { ArticoliComponent } from '../articoli/articoli.component';
import { IClienti } from '../models/Clienti';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  tabellaClienti: IClienti[] = [
    { nome: 'Caue', cognome: 'Rizzo', codCliente: "001", eta: 27, dataNascita: new Date('12-27-1994'), durataNoleggio: 1.30, dataNoleggio: new Date('3-18-2022') },
    { nome: 'José', cognome: 'Eduardo', codCliente: "002", eta: 57, dataNascita: new Date('05-21-1957'), durataNoleggio: 0.30, dataNoleggio: new Date('3-15-2021') },
    { nome: 'Eliana', cognome: 'Mendes', codCliente: "003", eta: 59, dataNascita: new Date('05-09-1955'), durataNoleggio: 0.90, dataNoleggio: new Date('11-2-2021') },
    { nome: 'Felipe', cognome: 'Bolonhani', codCliente: "004", eta: 25, dataNascita: new Date('05-25-1995'), durataNoleggio: 2.20, dataNoleggio: new Date('3-18-2022') }
  ]

  tabellaClienti2: IClienti[] = []

  verificato = false;
  data = new Date();
  verificaPulsanteSi = false;
  verificaPulsanteNo = false;


  constructor(private route: Router) {
    console.log(this.organizzaData())
  }

  ngOnInit(): void {
    this.verificaClienti()
  }


  organizzaData = () => {
    let dataTabella = ""

    for (let i = 0; i < this.tabellaClienti.length; i++) {
      dataTabella = `${this.tabellaClienti[i].dataNoleggio.getDate()}/${this.tabellaClienti[i].dataNoleggio.getMonth() + 1}/${this.tabellaClienti[i].dataNoleggio.getFullYear()}`
    }
    return dataTabella
  }


  dataOggi = () => {
    var date = new Date()
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  verificaClienti = () => {
    for (let i = 0; i < this.tabellaClienti.length; i++) {
      if (this.tabellaClienti[i].durataNoleggio > 1 && this.tabellaClienti[i].dataNoleggio.getDate() == this.data.getDate() && this.tabellaClienti[i].dataNoleggio.getMonth() == this.data.getMonth() && this.tabellaClienti[i].dataNoleggio.getFullYear() == this.data.getFullYear()) {


        var c = {
          nome: this.tabellaClienti[i].nome,
          cognome: this.tabellaClienti[i].cognome,
          codCliente: this.tabellaClienti[i].codCliente,
          eta: this.tabellaClienti[i].eta,
          dataNascita: this.tabellaClienti[i].dataNascita,
          durataNoleggio: this.tabellaClienti[i].durataNoleggio,
          dataNoleggio: this.tabellaClienti[i].dataNoleggio
        }

        this.tabellaClienti2.push(c)

        //}
      }
    }
  }

  verificaButton = (answer: boolean) => {
    if (answer) {
      this.verificaPulsanteSi = true
      this.verificaPulsanteNo = false
    } else {
      this.verificaPulsanteSi = false
      this.verificaPulsanteNo = true
    }
  }

  welcomeButton = () => {
    this.route.navigate(['welcome'])
  }

}
