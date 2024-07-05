import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreditCardDirective } from './shared/directives/credit-card.directive';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { NavbarDirective } from './shared/directives/navbar.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    NavbarComponent,
    NavbarDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
