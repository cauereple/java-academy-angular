import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  // autenticatoBlikerMaggiorenne = false;
  // autenticatoBlikerMinorenne = false;

  constructor(private route: Router) { } // escrevemos essa variavel privada para fazer o code injection

  ngOnInit(): void {
  }

  // autenticazione = () => console.log("Username: " + this.username + "\n" + "Password: " + this.password)
  autenticazione = () => {
    if (this.username === "caue" && this.password === "caue") {
      //this.route.navigate(['welcome', this.username]);
      this.route.navigate(['registrazione'])
      //this.autenticatoCodeImage = !this.autenticatoCodeImage;
      // if(this.eta >= 18) {
      //   this.autenticatoBlikerMaggiorenne = !this.autenticatoBlikerMaggiorenne;
      // }else {
      //   this.autenticatoBlikerMinorenne = !this.autenticatoBlikerMinorenne;
      // }

    } else {
      this.route.navigate(['credenziali-errati']);
    }
  }
}
