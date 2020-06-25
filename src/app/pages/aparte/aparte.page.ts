import { Component, OnInit } from '@angular/core';
import Aparte from 'src/app/models/Aparte';
import { AparteService } from 'src/app/services/aparte.service';
import TipoManejo from 'src/app/models/TipoManejo';
import { TipomanejoService } from 'src/app/services/tipomanejo.service';

@Component({
  selector: 'app-aparte',
  templateUrl: './aparte.page.html',
  styleUrls: ['./aparte.page.scss'],
})
export class ApartePage implements OnInit {

  apartes: Array<Aparte>;  
  tipomanejos: Array<TipoManejo>

  public id:number=0;
  public nome:string="";
  public tipomanejoid:number;
  public pesoinicial:number=0; 
  public pesofinal:number=0; 

  constructor(private aparteService: AparteService,private tipomanejoService: TipomanejoService) { };

  
    getAll(){
      this.aparteService.getAll().subscribe(data => {
        this.apartes = data;
      });
    }
    
    GetTipomanejos(){
      this.tipomanejoService.getAll().subscribe(data => {
        this.tipomanejos = data;
      });  
    }
    
    delete(item){ 
      this.aparteService.delete(item.id).subscribe(value=> {
         this.getAll(); 
       });
    } 
      
    save(){
      if (!this.nome.length) {
        alert("Entre com o nome do Aparte !");
        return;
      }
      if (this.tipomanejoid==0) {
        alert("Entre com o Tipo de Manejo !");
        return;
      }
      if (this.pesoinicial==0) {
        alert("Entre com o Peso Inicial do Aparte !");
        return;
      }
      if (this.pesofinal==0) {
        alert("Entre com o Peso Final !");
        return;
      }
    
       
        if (this.id!=0) 
           {   
            var oput = new Aparte()
            oput.id = this.id;
            oput.nome = this.nome; 
            oput.tipomanejoid = this.tipomanejoid; 
            oput.pesoinicial = this.pesoinicial; 
            oput.pesofinal = this.pesofinal; 
                
            this.aparteService.put(this.id.toString(),oput)
            .subscribe( value => {
              this.clearfields();
              this.getAll(); 
            });
          
           } else
           {
    
           var opost = new Aparte()

           opost.id = this.id;
           opost.nome = this.nome; 
           opost.tipomanejoid = this.tipomanejoid; 
           opost.pesoinicial = this.pesoinicial; 
           opost.pesofinal = this.pesofinal; 
                
           this.aparteService.post(opost)
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
   this.tipomanejoid = 0;
   this.pesoinicial = 0;
   this.pesofinal = 0;       
}
     

update(item) {
  this.id = item.id;
  this.nome = item.nome; 
  this.tipomanejoid = item.tipoManejo.id;
  this.pesoinicial = item.pesoInicial; 
  this.pesofinal = item.pesoFinal; 
}
    
    
ngOnInit() {
   this.getAll();
   this.GetTipomanejos(); 
}
 

}
