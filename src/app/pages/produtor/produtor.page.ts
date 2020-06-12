import { Component, OnInit } from '@angular/core';
import { ProdutorService } from '../../services/produtor.service';
import  Produtor from '../../models/Produtor';

@Component({
  selector: 'app-produtor',
  templateUrl: './produtor.page.html',
  styleUrls: ['./produtor.page.scss'],
})
export class ProdutorPage implements OnInit {
  produtores: Array<Produtor>;  

  public id:number=0;
  public nome:string="";
  public cpf:string="";

  constructor(private produtorService: ProdutorService){}

  getAll(){
    this.produtorService.getAll().subscribe(data => {
      this.produtores = data;
    });
  }
  
  /*
  save(item){

    if (!this.nome.length) {
      alert("Entre com o nome do Produtor !");
      return;
    }
    if (!this.cpf.length) {
      alert("Entre com o CPF !");
      return;
    }
   
       this.produtorService.save(item);  
       this.clearfields();
       this.getAll(); 

  }
  
  update(item) {
      this.produtorService.get(item.id);
   
      this.id = item.id;
      this.nome = item.nome; 
      this.cpf = item.cpf;
  } 

  delete(item){ 
      this.produtorService.remove(item.id);
      this.getAll(); 
  }
  
  clearfields(){
    this.id = 0;
    this.nome = "";
    this.cpf = "";
  }
*/


  ngOnInit() {
     this.getAll();
  }

}
