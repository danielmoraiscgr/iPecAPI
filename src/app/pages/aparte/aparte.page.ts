import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-aparte',
  templateUrl: './aparte.page.html',
  styleUrls: ['./aparte.page.scss'],
})
export class ApartePage implements OnInit {


  public id:number=0;
  public nome:string="";
  public id_tipomanejo:number;
  public pesoinicial:number=0; 
  public pesofinal:number=0; 
  
  row_data: any = []; // Table rows
  tipomanejos: any = []; 


  constructor() { };

  
 

save() {
  if (!this.nome.length) {
    alert("Entre com o nome do Aparte !");
    return;
  }
  if (this.id_tipomanejo==0) {
    alert("Entre com o Tipo de Manejo !");
    return;
  }
  if (this.pesoinicial==0) {
    alert("Entre com o Peso Inicial do Aparte !");
    return;
  }
  if (this.pesofinal==0) {
    alert("Entre com o Peso Final !");
    return;
  }


    }
  

  getAll() {
   
  }

  getTipoManejo() {
    
  }

delete(item) {
 
}

update(item) {
  this.id = item.id;
  this.nome = item.nome; 
  this.id_tipomanejo = item.id_tipomanejo;
  this.pesoinicial = item.pesoinicial; 
  this.pesofinal = item.pesofinal; 
}
 
clearfields(){
  this.id = 0;
  this.nome = "";
}

ngOnInit() {
     
  }
}
