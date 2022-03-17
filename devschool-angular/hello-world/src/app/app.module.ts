import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConteudoPrincipalComponent } from './conteudo-principal/conteudo-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ConteudoPrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
