import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import  Categoria from '../../models/Categoria';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  categorias: Array<Categoria>;  
  
  public id:number=0;
  public nome:string="";
  public sexo:string="";

  spresp: any;
 
  constructor(private categoriaService: CategoriaService){
  }
  
getAll() {
    this.categoriaService.getAll().subscribe(data => {
      this.categorias = data;
    });    
}

save(item) { // falta ainda 

  if (!this.nome.length) {
    alert("Entre com o nome da Categoria !");
    return;
  }
  if (!this.sexo.length) {
    alert("Entre com o sexo da Categoria !");
    return;
  }

  if (item.id==null) {
      alert(' Codigo nulo ')
      return;
  }
 
 
  this.clearfields();
  this.getAll(); 
}

  
//delete(item) {
//  this.categoriaService.deleteCategoria(id, item)
//  this.getAll();  
//}

delete(item)  {   // delete(id: any)
  this.categoriaService
    .deleteCategoria(item.id, item)
    .subscribe(resp => {
      return this.spresp.push(resp);
    });
}


edit(item) {
  this.categoriaService.get(item.id);

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
    this.getAll();
  }

}
