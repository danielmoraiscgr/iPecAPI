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

  constructor(private categoriaService: CategoriaService){
  }

  getAll(){
    this.categoriaService.getAll().subscribe(data => {
      this.categorias = data;
    });
  }

  delete(item){ 
    this.categoriaService.delete(item.id).subscribe(value=> {
       this.getAll(); 
     });
  } 
    
  save(){
      if (!this.nome.length) {
        alert("Entre com o nome da Categoria !");
        return;
      }
      if (!this.sexo.length) {
        alert("Entre com o Sexo !");
        return;
      }
     
      if (this.id!=0) 
         {   
          var oput = new Categoria()
          oput.id = this.id;
          oput.nome =this.nome;
          oput.sexo = this.sexo;
      
          this.categoriaService.put(this.id.toString(),oput)
          .subscribe( value => {
            this.clearfields();
            this.getAll(); 
          });
        
         } else
         {
         var opost = new Categoria()
         opost.nome =this.nome;
         opost.sexo = this.sexo;
    
         this.categoriaService.post(opost)
         .subscribe(
           data=> {
              this.clearfields();
              this.getAll(); 
           }
         )}
  }

    clearfields(){
      this.id = 0;
      this.nome = "";
      this.sexo = "";
    }

    
  update(item) {
    this.id = item.id;
    this.nome = item.nome; 
    this.sexo = item.sexo;
  } 

  ngOnInit() {
     this.getAll();
  }
}
