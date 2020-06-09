import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  public id:number=0;
  public nome:string="";
  public sexo:string="";
  
  row_data: any = []; // Table rows



  constructor(){
        
  }
  
 

 
save() {

  if (!this.nome.length) {
    alert("Entre com o nome da Categoria !");
    return;
  }
  if (!this.sexo.length) {
    alert("Entre com o sexo da Categoria !");
    return;
  }
}

  getAll() {
    
  }

delete(item) {
 
}

update(item) {
  this.id = item.id;
  this.nome = item.nome; 
  this.sexo = item.sexo;
}

clearfields(){
  this.id = 0;
  this.nome = "";
  this.sexo = "";
}

  ngOnInit() {
    
  }

}
