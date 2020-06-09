import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raca',
  templateUrl: './raca.page.html',
  styleUrls: ['./raca.page.scss'],
})
export class RacaPage implements OnInit {

  public id:number=0;
  public nome:string="";
  
  row_data: any = []; // Table rows


  constructor() { }
 

save() {
  if (!this.nome.length) {
    alert("Entre com o nome da Raça!");
    return;
  }
}

getAll() {
   
  }


delete(item) {

}

update(item) {

  this.id =   item.id;
  this.nome = item.nome; 

}
 
clearfields(){
  this.id = 0;
  this.nome = "";
}

  ngOnInit() {
   
  }

}
