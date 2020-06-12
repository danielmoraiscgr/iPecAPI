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
  public produtorId:number;
  public nome:string="";
  public area:number=0;
 
  constructor(private fazendaService: FazendaService, private produtorService: ProdutorService) {
  };

 
clearfields(){
  this.id = 0;
  this.produtorId = 0;
  this.nome = "";
  this.area = 0 ;
}

getAll() {
  this.fazendaService.getAll().subscribe(data => {
    this.fazendas = data;
  });    
}

GetProdutores(){
  this.produtorService.getAll().subscribe(data => {
    this.produtores = data;
  }); 
}


  ngOnInit() {
    this.getAll();
    this.GetProdutores(); 
    
  }

}
