import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor() { }

  autentica(UserId : string, Password : string) {

    return (UserId === 'caue' && Password === 'caue') ? true : false;

    // if (UserId === 'caue' && Password === 'caue') {
    // sessionStorage.setItem('Utente', UserId);
    // return true;
    // } else {
    // return false;
    // }
  
  }


}
