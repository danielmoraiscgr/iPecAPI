import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-totalcategoria',
  templateUrl: './totalcategoria.page.html',
  styleUrls: ['./totalcategoria.page.scss'],
})
export class TotalcategoriaPage implements OnInit {


  public datainicial:Date;
  public datafinal:Date;
  public id_tipomanejo:number=0; 
  public id_produtor:number=0; 
  public id_fazenda:number=0; 
  public totalpeso:any=[];
  
  row_data: any = []; 
  totalcategorias: any = [];
  tipomanejos: any =[];
  produtores: any = [];
  fazendas: any = [];

   constructor() { }

   
  

totalCategoria(){
 
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
    this.datainicial=null; 
    this.datafinal=null; 
    this.id_tipomanejo=0;
    this.id_produtor=0; 
    this.id_fazenda=0; 
    this.totalpeso=[]; 
    this.totalcategorias = [];

}
  diaAtual(){
    //let datamanejo=this.datepipe.transform(this.data, 'MM/dd/yyyy');
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
