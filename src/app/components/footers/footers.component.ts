import { Component } from '@angular/core';
import { InformacaoService } from '../../services/informacao.service';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styles: []
})
export class FootersComponent {
  ano: number = new Date().getFullYear();
  constructor(public _is:InformacaoService) { }


}
