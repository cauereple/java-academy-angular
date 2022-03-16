import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credenziali-errati',
  templateUrl: './credenziali-errati.component.html',
  styleUrls: ['./credenziali-errati.component.css']
})
export class CredenzialiErratiComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  credenziali = () => {
    this.route.navigate(['login']);
  }

}
