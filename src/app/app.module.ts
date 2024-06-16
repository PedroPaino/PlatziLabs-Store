import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
    // Outros módulos
  ],
  providers: [],
  bootstrap: [] // Remova o AppComponent daqui se ele for standalone
})
export class AppModule { }
