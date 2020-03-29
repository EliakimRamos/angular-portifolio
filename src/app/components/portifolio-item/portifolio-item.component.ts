import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortifolioItemService } from '../../services/portifolio-item.service';

@Component({
  selector: 'app-portifolio-item',
  templateUrl: './portifolio-item.component.html',
  styles: []
})
export class PortifolioItemComponent {
    item:any= undefined;
    cod:string = undefined;
  constructor(private route:ActivatedRoute,
              private _pis:PortifolioItemService) { 
    route.params.subscribe( parametros=>{
        // console.log(parametros);
        // console.log(parametros['id']);

        _pis.carregaItem(parametros['id']).subscribe(dados =>{
            // console.log(dados.json());
            this.cod = parametros['id'];
            this.item = dados.json();
        });
    })
   }

}
