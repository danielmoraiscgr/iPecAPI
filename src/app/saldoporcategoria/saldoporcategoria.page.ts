import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-saldoporcategoria',
  templateUrl: './saldoporcategoria.page.html',
  styleUrls: ['./saldoporcategoria.page.scss'],
})
export class SaldoporcategoriaPage implements OnInit {


  readonly database_name:string = "ipedDB"; // DB name
  public id_produtor:number=0; 
  public id_fazenda:number=0; 

  saldoporcategorias: any = [];
  totalcabs: any [];
  produtores: any = [];
  fazendas: any = [];

   constructor(r) { }
   
  

saldoporCategoria(){
  
}

totalanimais(){
 
}

getProdutores() {

}

getFazendas(id_produtor) {
  
}

  
clearfields(){
    this.id_produtor=0; 
    this.id_fazenda=0; 
    this.saldoporcategorias = [];

}

  ngOnInit() {

}


}
