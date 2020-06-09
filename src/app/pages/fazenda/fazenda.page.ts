import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fazenda',
  templateUrl: './fazenda.page.html',
  styleUrls: ['./fazenda.page.scss'],
})
export class FazendaPage implements OnInit {

  public id:number=0;
  public id_produtor:number;
  public nome:string="";
  public compareWith:any;

  row_data: any = []; // Table rows
  produtores: any = []; 
  readonly database_name:string = "ipedDB"; // DB name
  readonly table_name:string = "fazenda"; // Table name
  
  constructor() {
    
   };

 
clearfields(){
  this.id = 0;
  this.id_produtor = 0;
  this.nome = "";
}

save() {
  if (this.id_produtor==null) {
    alert("Entre com o Produtor !");
    return;
  }
  if (!this.nome.length) {
    alert("Entre com o nome da Fazenda !");
    return;
  }
  }

getAll() {
   
}


getProdutores() {
    
}
 
delete(item) {
 
}

update(item) {
  this.id = item.id;
  this.id_produtor = item.id_produtor;
  this.nome = item.nome; 
}



  ngOnInit() {

  }

}
