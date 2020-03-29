import { Component } from '@angular/core';
import { InformacaoService } from '../../services/informacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public _is:InformacaoService,
              private router:Router) { }

  buscar_item(termino:string){
    //console.log(termino);
    this.router.navigate(['portifolio/buscar',termino]);
  }
}
