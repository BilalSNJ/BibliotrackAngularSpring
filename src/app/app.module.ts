import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AccueilButtonsComponent } from './shared/component/accueil-buttons/accueil-buttons.component';
import { LivresComponent } from './pages/livres/livres.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilButtonsComponent,
    LivresComponent,
    AccueilComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
