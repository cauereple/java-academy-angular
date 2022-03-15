import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "username";
  password = "password";

  constructor() { }

  ngOnInit(): void {
  }

  autenticazione = () => console.log("Username: " + this.username + "\n" + "Password: " + this.password)

}
