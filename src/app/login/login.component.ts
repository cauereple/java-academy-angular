import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  eta = "";
  msg = "Username, password o età errati";
  autenticatoMsg = true;
  autenticatoVictoryImage = false;
  autenticatoCodeImage = true;

  constructor() { }

  ngOnInit(): void {
  }

  // autenticazione = () => console.log("Username: " + this.username + "\n" + "Password: " + this.password)
  autenticazione = () => {
    this.autenticatoMsg = true;
    if (this.username === "caue" && this.password === "caue" && this.eta === "123") {
      this.autenticatoMsg = this.autenticatoMsg;
      this.autenticatoVictoryImage = !this.autenticatoVictoryImage;
      this.autenticatoCodeImage = !this.autenticatoCodeImage;
    } else {
      this.autenticatoMsg = !this.autenticatoMsg;
      this.autenticatoVictoryImage = this.autenticatoVictoryImage;
      this.autenticatoCodeImage = this.autenticatoCodeImage;
    }
  }
}
