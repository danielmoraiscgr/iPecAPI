import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalizacao',
  templateUrl: './totalizacao.page.html',
  styleUrls: ['./totalizacao.page.scss'],  
})


export class TotalizacaoPage implements OnInit {


  public datainicial:Date;
  public datafinal:Date;
  public id_tipomanejo:number=0; 
  public id_produtor:number=0; 
  public id_fazenda:number=0; 
  public totalpeso:any=[];
  
  row_data: any = []; 
  totalmanejo: any = [];
  tipomanejos: any =[];
  produtores: any = [];
  fazendas: any = [];

   constructor() { }

 

totalManejoDia(){

}

totalmediapeso(){
  

}


getTipoManejos() {
 
}
getProdutores() {
  
}

getFazendas(id_produtor) {
  
}

clearfields(){
  this.id_produtor=0; 
  this.id_fazenda=0; 
  this.totalmanejo = [];

}
  
  diaAtual(){
       console.log(this.dataHoje())
  }
  
  dataHoje() {
    var dataatual = new Date();
    var dia = dataatual.getDate();
    var mes = dataatual.getMonth() + 1;
    var ano = dataatual.getFullYear();
    return [dia, mes, ano].join('/');
  }

  ngOnInit() {
  
}


}
