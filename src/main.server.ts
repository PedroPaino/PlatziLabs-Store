import 'zone.js/node';  // Importa Zone.js para o servidor.
import { renderModule } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

enableProdMode();

export default function render(url: string, document: string) {
  return renderModule(AppComponent, {
    document,
    url,
    extraProviders: [
      { provide: 'APP_ROUTES', useValue: APP_ROUTES },
      { provide: 'HTTP_CLIENT', useFactory: provideHttpClient }
    ]
  });
}
