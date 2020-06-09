import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  @ViewChild(IonContent, {static: true}) content: IonContent;

  scrollToTop() {
    this.content.scrollToTop(400);
  }
  ionViewDidEnter(){
    this.scrollToTop();
  }

  public id:number=0;
  public identanimal:string="";
  public id_produtor:number=0; 
  public id_fazenda:number=0; 
  public id_categoria:number=0; 
  public id_raca:number=0; 
  public ativo:number=1; 

  row_data: any = []; // Table rows
  produtores: any = [];
  fazendas: any = [];
  categorias: any = [];
  racas: any = []; 



  constructor() { 

  };



save() {
  if (!this.identanimal.length){
    alert("Entre com a Identificação do Animal ! ");
    return;
  }
  if (this.id_produtor==0) {
    alert("Entre com o Produtor !");
    return;
  }
  if (this.id_fazenda==0) {
    alert("Entre com a Fazenda!");
    return;
  }
  if (this.id_categoria==0) {
    alert("Entre com a Categoria !");
    return;
  }
  if (this.id_raca==0) {
    alert("Entre com a Raça !");
    return;
  }
 
      this.scrollToTop();
  }

  getAll() {
  
  }

  getProdutores() {
    
  }
  

  getFazendas(id_produtor) {
   
  }
  
  getCategorias() {
    
  }

  getRacas() {
   
  }

delete(item) {
 
}

  update(item) {
    this.id = item.id;
    this.identanimal = item.identanimal;
    this.id_produtor = item.id_produtor; 
    this.id_fazenda  = item.id_fazenda;
    this.id_categoria = item.id_categoria; 
    this.id_raca = item.id_raca;
    this.ativo = item.ativo;     
    this.getFazendas(item.id_produtor); 

    this.scrollToTop();

  }


clearfields(){
  this.id = 0;
  this.identanimal = "";
  this.id_produtor = 0; 
  this.id_fazenda = 0; 
  this.id_categoria = 0; 
  this.id_raca = 0; 
  this.ativo = 1; 
}

  ngOnInit() {
   
  }



}
