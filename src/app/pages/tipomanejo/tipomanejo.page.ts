import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipomanejo',
  templateUrl: './tipomanejo.page.html',
  styleUrls: ['./tipomanejo.page.scss'],
})
export class TipomanejoPage implements OnInit {

  public id:number=0;
  public nome:string="";  
  row_data: any = []; // Table rows


  constructor() { }

 

save() {
  if (!this.nome.length) {
    alert("Entre com o nome do Tipo de Manejo!");
    return;
  }
}
  
getAll() {
   
}

  
delete(item) {
 
}


update(item) {
  this.id = item.id;
  this.nome = item.nome; 

}
 
clearfields(){
  this.id = 0;
  this.nome = "";
}

  ngOnInit() {
  
  }

}
