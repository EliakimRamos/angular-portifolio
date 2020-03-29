import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortifolioItemService } from '../../services/portifolio-item.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent{
    termino:undefined;
  constructor(private route:ActivatedRoute,
              public _pis:PortifolioItemService) {
    route.params.subscribe(parametros=>{
      this.termino = parametros['termino'];
      _pis.buscar_Itens(this.termino);
    });
   }

}
