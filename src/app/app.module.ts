import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { CredenzialiErratiComponent } from './credenziali-errati/credenziali-errati.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ClientiComponent } from './clienti/clienti.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    CredenzialiErratiComponent,
    RegistrazioneComponent,
    ArticoliComponent,
    ProdottiComponent,
    ClientiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // per binding bidirezionale ngmodel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
