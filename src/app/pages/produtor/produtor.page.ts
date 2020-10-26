import { Component, OnInit } from '@angular/core';
import { ProdutorService } from '../../services/produtor.service';
import  Produtor from '../../models/Produtor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtor',
  templateUrl: './produtor.page.html',
  styleUrls: ['./produtor.page.scss'],
})
export class ProdutorPage implements OnInit {
  
  produtores: Array<Produtor>;  

  public id:number=0;
  public nomeProdutor:string="";
  public cpf:string="";

  constructor(private produtorService: ProdutorService, private router: Router){}

  objProdutor: Produtor; 

 getAll(){
    this.produtorService.getAll().subscribe(data => {
      this.produtores = data;
    });
  }

  delete(item){ 
    this.produtorService.delete(item.id).subscribe(value=> {
       this.getAll(); 
     });
  } 
    
  save(){
      if (!this.nomeProdutor.length) {
        alert("Entre com o nome do Produtor !");
        return;
      }
      if (!this.cpf.length) {
        alert("Entre com o CPF !");
        return;
      }
     
      if (this.id!=0) 
         {   
          var oput = new Produtor()
          oput.id = this.id;
          oput.nomeProdutor =this.nomeProdutor;
          oput.cpf = this.cpf;
                          
          this.produtorService.put(this.id.toString(),oput)
          .subscribe( value => {
            this.clearfields();
            this.getAll(); 
          });
        
         } else
         {
         var opost = new Produtor()
         opost.nomeProdutor =this.nomeProdutor;
         opost.cpf = this.cpf;
    
         this.produtorService.post(opost)
         .subscribe(
           data=> {
              this.objProdutor = data; 
              this.clearfields();
              this.getAll(); 
           }
         )}
  }

    clearfields(){
      this.id = 0;
      this.nomeProdutor = "";
      this.cpf = "";
    }

    
  update(item) {
    this.id = item.id;
    this.nomeProdutor = item.nomeProdutor; 
    this.cpf = item.cpf;
  } 

  ngOnInit() { 
     this.getAll();
  }

}
