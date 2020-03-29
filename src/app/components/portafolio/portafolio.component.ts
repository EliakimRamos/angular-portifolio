import { Component } from '@angular/core';
import { PortifolioItemService } from '../../services/portifolio-item.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent {

  constructor(public _pis:PortifolioItemService){
    
  }
 
}
