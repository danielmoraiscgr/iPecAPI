import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-fazenda',
  templateUrl: './fazenda.page.html',
  styleUrls: ['./fazenda.page.scss'],
})
export class FazendaPage implements OnInit {

  databaseObj: SQLiteObject; // Database instance object
  id_produtor:number;
  nome:string="";

  row_data: any = []; // Table rows
  produtores: any = []; 
  readonly database_name:string = "ipedDB"; // DB name
  readonly table_name:string = "fazenda"; // Table name
  
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
    ['CREATE TABLE IF NOT EXISTS produtor (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, email TEXT NOT NULL)'],
    ['CREATE TABLE IF NOT EXISTS fazenda (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, id_produtor integer)'],
    ])
    .then(() => {
      this.getAll();
      this.getProdutores();
    })
    .catch(e => {
      alert(' Erro ao criar banco de dados ');
     // alert("error " + JSON.stringify(e))
    });
}
 

add() {
  if (this.id_produtor==null) {
    alert("Entre com o Produtor !");
    return;
  }
  if (!this.nome.length) {
    alert("Entre com o nome da Fazenda !");
    return;
  }

  this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,id_produtor) VALUES (?,?)', [this.nome,this.id_produtor])
  .then(() => {
      alert('Fazenda Inserida !');
      this.nome="";
      this.id_produtor=0;
      this.getAll();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
   
  }

  getAll() {
    this.databaseObj.executeSql("SELECT fazenda.id,fazenda.nome,fazenda.id_produtor,produtor.nome as nomeprodutor from fazenda , produtor where fazenda.id_produtor=produtor.id",[])
    
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


  getProdutores() {
    this.databaseObj.executeSql("SELECT * FROM produtor",[])
      .then((res) => {
        this.produtores = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.produtores.push(res.rows.item(i));
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
      alert("Fazenda removida !");
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
