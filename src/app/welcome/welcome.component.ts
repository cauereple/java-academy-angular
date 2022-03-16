import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = "";
  surname = "";
  
  //user: string=""

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this.user=this.route.snapshot.params["username"] //vogliamo visualizzare l'user sulla pagina Welcome
    this.name=this.route.snapshot.params["nome"]
    this.surname=this.route.snapshot.params["cognome"]
  }
}
