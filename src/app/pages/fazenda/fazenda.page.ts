import { Component, OnInit } from '@angular/core';
import { FazendaService } from '../../services/fazenda.service';
import { ProdutorService } from '../../services/produtor.service';
import Fazenda from '../../models/Fazenda';
import Produtor from '../../models/Produtor';

@Component({
  selector: 'app-fazenda',
  templateUrl: './fazenda.page.html',
  styleUrls: ['./fazenda.page.scss'],
})
export class FazendaPage implements OnInit {
  
  fazendas: Array<Fazenda>;  
  produtores: Array<Produtor>;


  public id:number=0;
  public nomeFazenda:string="";
  public area:number=0;
  public produtorId:number=0;
  public nomeProdutor:string="";
  public cpf:string; 
  public compareWith:any;
 
  constructor(private fazendaService: FazendaService, private produtorService: ProdutorService) {
  };

  objFazenda: Fazenda;
   

getAll(){
  this.fazendaService.getAll().subscribe(data => {
    this.fazendas = data;
  });
}

GetProdutores(){
  this.produtorService.getAll().subscribe(data => {
    this.produtores = data;
  });  
}

delete(item){ 
  this.fazendaService.delete(item.id).subscribe(value=> {
     this.getAll(); 
   });
} 
  
save(){
   if (!this.produtorId) {
      alert("Entre com o Produtor !");
      return;
    }
    if (!this.nomeFazenda.length) {
      alert("Entre com o nome da Fazenda !");
      return;
    }
    if (this.area==0) {
      alert("Entre com a Area !");
      return;
    }
   
    if (this.id!=0) 
       {   
        var oput = new Fazenda()
        oput.id = this.id;
        oput.nomeFazenda = this.nomeFazenda; 
        oput.area = this.area; 
        oput.produtorId = this.produtorId;
            
        console.log(oput);
        
        this.fazendaService.put(this.id.toString(),oput)
        .subscribe( value => {
          this.clearfields();
          this.getAll(); 
        });
      
       } else
       {

       var opost = new Fazenda()
       opost.produtorId   = this.produtorId;
       opost.nomeProdutor = this.nomeProdutor;
       opost.nomeFazenda  = this.nomeFazenda; 
       opost.area         = this.area;
             
       this.fazendaService.post(opost)
       .subscribe(
         data=> {
            this.objFazenda = data; 
            this.clearfields();
            this.getAll(); 
         }
       )}
}

clearfields(){
  this.id = 0;
  this.produtorId = 0;
  this.nomeProdutor = "";
  this.nomeFazenda = "";
  this.area = 0 ;
}
  
update(item) {  
  this.id = item.id;
  this.nomeFazenda = item.nomeFazenda
  this.area = item.area;
  this.produtorId = item.produtorId;
  this.nomeProdutor = item.nomeProdutor;  

 const compareWithFn = (o1, o2) => {
  return o1 && o2 ? o1.produtorId === o2.id : o1 === o2;
  };
   this.compareWith = compareWithFn;

} 

  ngOnInit() {
    this.getAll();
    this.GetProdutores(); 
  }

}
