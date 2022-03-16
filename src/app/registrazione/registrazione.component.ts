import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  nome = "";
  cognome = "";
  eta!: number;
  msg = "Per accedere, deve avere almeno 18 anni"
  autenticatoMsg = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  registra = () => {
    if(this.eta >= 18)
      this.route.navigate(['welcome', this.nome, this.cognome]);
    else
      this.autenticatoMsg = !this.autenticatoMsg;
  }
}
