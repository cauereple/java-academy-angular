import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  // msg = "Username o password errati";
  autenticatoMsg = true;
  autenticatoCodeImage = true;
  autenticato = false;
  // autenticatoBlikerMaggiorenne = false;
  // autenticatoBlikerMinorenne = false;

  constructor(private route: Router, private basicAuth : AutenticationService) { } // escrevemos essa variavel privada para fazer o code injection
  // code injection di una variabile PRIVATA e di altra classe (tipo Router) usando il singleton

  ngOnInit(): void {
  }

  //  autenticazione = () => {
  //   if (this.username === "caue" && this.password === "caue") {
  // //     //this.route.navigate(['welcome', this.username]);
  //   this.route.navigate(['registrazione'])
  // //     //this.autenticatoCodeImage = !this.autenticatoCodeImage;
  // //     // if(this.eta >= 18) {
  // //     //   this.autenticatoBlikerMaggiorenne = !this.autenticatoBlikerMaggiorenne;
  // //     // }else {
  // //     //   this.autenticatoBlikerMinorenne = !this.autenticatoBlikerMinorenne;
  // //     // }

  //    } else {
  //      this.route.navigate(['credenziali-errati']);
  //    }
  //  }

   autenticazione () {
     if(this.basicAuth.autentica(this.username, this.password)){
       this.autenticato = true
       this.route.navigate(['registrazione'])
     }else {
       this.route.navigate(['credenziali-errati']);
     }
   }

  
}
