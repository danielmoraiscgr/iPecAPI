import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-tipomanejo',
  templateUrl: './tipomanejo.page.html',
  styleUrls: ['./tipomanejo.page.scss'],
})
export class TipomanejoPage implements OnInit {

  
  databaseObj: SQLiteObject; // Database instance object
  nome:string="";  
  row_data: any = []; // Table rows
  readonly database_name:string = "ipedDB"; // DB name
  readonly table_name:string = "tipomanejo"; // Table name


  constructor(private sqlite:SQLite) { }

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
  this.databaseObj.sqlBatch([
    ['CREATE TABLE IF NOT EXISTS tipomanejo (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL)'],
    ])
    .then(() => {
      this.getAll();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
}
 

add() {
  if (!this.nome.length) {
    alert("Entre com o nome do Tipo de Manejo!");
    return;
  }
 this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome) VALUES (?)',[this.nome])
    
  .then(() => {
      alert('Tipo de Manejo Inserido !');
      this.nome="";
      this.getAll();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
   
  }

  getAll() {
    this.databaseObj.executeSql("SELECT * from tipomanejo", [])
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
      alert("Tipo de Manejo removido !");
      this.getAll();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
}

  update() {
      

  }


  ngOnInit() {
   this.createDB();    
  }



}
