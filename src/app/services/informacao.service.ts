import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacaoService {

  info:any = {};
  equipe:any[] = [];
  carregado:boolean = false;
  carregado_sobre_mim:boolean = false;

  constructor(public http:Http) {

      this.carga_info();
      this.carga_sobre_mim();
      
   }

   public carga_info(){
      this.http.get("data/info.pagina.json")
      .subscribe( data=>{
        // console.log(data.json());
        this.carregado= true;
        this.info= data.json();
      });
   }

   public carga_sobre_mim(){
      this.http.get("https://portifolio-fbe34.firebaseio.com/equipe.json")
      .subscribe( data=>{
        // console.log(data.json());
        this.carregado_sobre_mim= true;
        this.equipe= data.json();
      });
   }

}
