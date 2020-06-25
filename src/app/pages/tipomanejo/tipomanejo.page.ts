import { Component, OnInit } from '@angular/core';
import { TipomanejoService } from '../../services/tipomanejo.service';
import  TipoManejo from '../../models/TipoManejo';

@Component({
  selector: 'app-tipomanejo',
  templateUrl: './tipomanejo.page.html',
  styleUrls: ['./tipomanejo.page.scss'],
})
export class TipomanejoPage implements OnInit {

  tipomanejos : Array<TipoManejo>;

  public id:number=0;
  public nome:string="";  
  
  constructor(private tipomanejoService: TipomanejoService) { }

 

  getAll(){
    this.tipomanejoService.getAll().subscribe(data => {
      this.tipomanejos = data;
    });
  }

  delete(item){ 
    this.tipomanejoService.delete(item.id).subscribe(value=> {
       this.getAll(); 
     });
  } 
    
  save(){
      if (!this.nome.length) {
        alert("Entre com o nome do Manejo!");
        return;
      }
         
      if (this.id!=0) 
         {   
          var oput = new TipoManejo()
          oput.id = this.id;
          oput.nome =this.nome;
           
          this.tipomanejoService.put(this.id.toString(),oput)
          .subscribe( value => {
            this.clearfields();
            this.getAll(); 
          });
        
         } else
         {
         var opost = new TipoManejo()
         opost.nome =this.nome;
    
         this.tipomanejoService.post(opost)
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