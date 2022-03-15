import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  msg = "Username o password errati";
  autenticato = true;

  constructor() { }

  ngOnInit(): void {
  }

  // autenticazione = () => console.log("Username: " + this.username + "\n" + "Password: " + this.password)
  autenticazione = () => {
    this.autenticato = true;
    if (this.username === "caue" && this.password === "caue") {
      this.autenticato = this.autenticato;
    } else {
      this.autenticato = !this.autenticato;
    }
  }
}
