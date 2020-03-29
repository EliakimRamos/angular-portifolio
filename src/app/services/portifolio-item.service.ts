import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { reject } from 'q';



@Injectable()
export class PortifolioItemService {


    items:any[] =[];
    items_filtrados:any[] =[];
    carregando:boolean=true;

  constructor(private http:Http ) { 
    this.carregaItems();

   }

   public buscar_Itens( termino:string){
    
    // console.log("Buscando Itens");
    // console.log(this.items.length);
    if(this.items.length === 0){
      this.carregaItems().then(()=>{
        //terminou a carga
        this.filtra_itens(termino);
      });
    }else{
      this.filtra_itens(termino);
    }
   
   }

   private filtra_itens(termino:string){
    
    this.items_filtrados = [];
    termino.toLowerCase();
    
    this.items.forEach(prod=>{
      if(prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0){
        this.items_filtrados.push(prod);
      }
      // console.log(prod);
    });
   }
    public carregaItem( cod:string ){
      return this.http.get(`https://portifolio-fbe34.firebaseio.com/portifolio_item/${ cod }.json`)
    }

    public carregaItems(){
      if(this.items.length === 0){
        this.carregando = true; 
        let promesa = new Promise((resolve,reject)=>{
          
          this.http.get("https://portifolio-fbe34.firebaseio.com/portifolio_item_idx.json")
            .subscribe(res =>{
                // console.log(res.json());
                  this.carregando = false;
                  this.items = res.json(); 
                  resolve();            
            });
        });
        return promesa;
      }
    }
}
