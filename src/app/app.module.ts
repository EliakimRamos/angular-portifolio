import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Rotas
import { app_routing } from "./app.routes";

//serviços 
import { InformacaoService } from "./services/informacao.service";

//COmponentes 

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FootersComponent } from './components/footers/footers.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortifolioItemComponent } from './components/portifolio-item/portifolio-item.component';
import { PortifolioItemService } from './services/portifolio-item.service';
import { BuscarComponent } from './components/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootersComponent,
    PortafolioComponent,
    AboutComponent,
    PortifolioItemComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InformacaoService,
    PortifolioItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
