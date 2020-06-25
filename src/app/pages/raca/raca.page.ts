import { Component, OnInit } from '@angular/core';
import { RacaService } from '../../services/raca.service'
import Raca from '../../models/Raca'

@Component({
  selector: 'app-raca',
  templateUrl: './raca.page.html',
  styleUrls: ['./raca.page.scss'],
})
export class RacaPage implements OnInit {

  racas : Array<Raca>;

  public id:number=0;
  public nome:string="";   

  constructor(private racaService: RacaService) { }
 

  getAll(){
    this.racaService.getAll().subscribe(data => {
      this.racas = data;
    });
  }

  delete(item){ 
    this.racaService.delete(item.id).subscribe(value=> {
       this.getAll(); 
     });
  } 
    
  save(){
      if (!this.nome.length) {
        alert("Entre com o nome da raça!");
        return;
      }
           
      if (this.id!=0) 
         {   
          var oput = new Raca()
          oput.id = this.id;
          oput.nome =this.nome;
       
          this.racaService.put(this.id.toString(),oput)
          .subscribe( value => {
            this.clearfields();
            this.getAll(); 
          });
        
         } else
         {
         var opost = new Raca()
         opost.nome =this.nome;
         
         this.racaService.post(opost)
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
    }

    
  update(item) {
    this.id = item.id;
    this.nome = item.nome; 
  } 

  ngOnInit() {
     this.getAll();
  }
}
