import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoliComponent } from './articoli/articoli.component';
import { ClientiComponent } from './clienti/clienti.component';
import { CredenzialiErratiComponent } from './credenziali-errati/credenziali-errati.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path:'' , component :LoginComponent},
  { path:'index' , component :LoginComponent},
  { path:'login' , component :LoginComponent}, //identifica la landing page
  { path: 'registrazione' , component :RegistrazioneComponent},
  { path:'welcome/:nome/:cognome' , component :WelcomeComponent},
  { path: 'articoli' , component :ArticoliComponent},
  { path: 'prodotti' , component :ProdottiComponent},
  { path: 'clienti' , component :ClientiComponent},
  { path:'credenziali-errati' , component :CredenzialiErratiComponent},
  { path:'**' , component :ErrorComponent}, //la pagina di errore viene identificata con doppio asterisco
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
