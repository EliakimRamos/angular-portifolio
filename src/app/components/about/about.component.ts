import { Component } from '@angular/core';
import { InformacaoService } from '../../services/informacao.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {

  constructor(public _is:InformacaoService) { }


}
