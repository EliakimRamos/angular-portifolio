import { Component } from '@angular/core';
import { InformacaoService } from './services/informacao.service';
import { PortifolioItemService } from './services/portifolio-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( public _is:InformacaoService, public _pis:PortifolioItemService){
    
  }
}
