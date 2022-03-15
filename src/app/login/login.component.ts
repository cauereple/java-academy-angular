import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  eta = 0;
  msg = "Username, password o età errati";
  autenticatoMsg = true;
  //autenticatoVictoryImage = false;
  autenticatoCodeImage = true;
  autenticatoBlikerMaggiorenne = false;
  autenticatoBlikerMinorenne = false;

  constructor() { }

  ngOnInit(): void {
  }

  // autenticazione = () => console.log("Username: " + this.username + "\n" + "Password: " + this.password)
  autenticazione = () => {
    this.autenticatoMsg = true;
    if (this.username === "caue" && this.password === "caue") {
      this.autenticatoMsg = this.autenticatoMsg;
      //this.autenticatoVictoryImage = !this.autenticatoVictoryImage;
      this.autenticatoCodeImage = !this.autenticatoCodeImage;
      if(this.eta >= 18) {
        this.autenticatoBlikerMaggiorenne = !this.autenticatoBlikerMaggiorenne;
      }else {
        this.autenticatoBlikerMinorenne = !this.autenticatoBlikerMinorenne;
      }

    } else {
      this.autenticatoMsg = !this.autenticatoMsg;
      //this.autenticatoVictoryImage = this.autenticatoVictoryImage;
      this.autenticatoCodeImage = this.autenticatoCodeImage;
    }
  }
}
