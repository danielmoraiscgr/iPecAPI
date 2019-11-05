import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  databaseObj: SQLiteObject; // Database instance object
  nome:string="";
  sexo:string="";
  
  row_data: any = []; // Table rows
  readonly database_name:string = "ipedDB"; // DB name
  readonly table_name:string = "categoria"; // Table name


  constructor(private sqlite: SQLite){
        
  }

  
  createDB() {

    this.sqlite.create({
       name: this.database_name,
       location: 'default'
     })
       .then((db: SQLiteObject) => {
         this.databaseObj = db;
         this.createTable();
       })
       .catch(e => {
         alert("error " + JSON.stringify(e))
       });
 }

  createTable() {
  this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS categoria (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, sexo TEXT NOT NULL)', [])
    .then(() => {
      this.getAll();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
}
 

add() {
  if (!this.nome.length) {
    alert("Entre com o nome da Categoria !");
    return;
  }
  if (!this.sexo.length) {
    alert("Entre com o sexo da Categoria !");
    return;
  }
 this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,sexo) VALUES (?,?)',[this.nome,this.sexo])
    
  .then(() => {
      alert('Categoria Inserida !');
      this.nome="";
      this.sexo="";
      this.getAll();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
   
  }

  getAll() {
    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
      .then((res) => {
        this.row_data = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
        }
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }


delete(item) {
  this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE id = " + item.id, [])
    .then((res) => {
      alert("Categoria removida !");
      this.getAll();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
}

  update() {
      

  }

  /*async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
      });
      toast.present(); 
  }
  */

  ngOnInit() {
   this.createDB();    
  }



}
