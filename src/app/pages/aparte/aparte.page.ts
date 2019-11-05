import { Component, OnInit } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-aparte',
  templateUrl: './aparte.page.html',
  styleUrls: ['./aparte.page.scss'],
})
export class ApartePage implements OnInit {


  databaseObj: SQLiteObject; // Database instance object
  nome:string="";
  id_tipomanejo:number;
  pesoinicial:number=0; 
  pesofinal:number=0; 
  
  row_data: any = []; // Table rows
  tipomanejos: any = []; 

  readonly database_name:string = "ipedDB"; // DB name
  readonly table_name:string = "aparte"; // Table name


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
  //this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS aparte (id integer primary key AUTOINCREMENT NOT NULL, id_tipomanejo integer NOT NULL, nome TEXT NOT NULL, pesoinicial integer NOT NULL, pesofinal integer NOT NULL)', [])
  this.databaseObj.sqlBatch([
    ['CREATE TABLE IF NOT EXISTS aparte (id integer primary key AUTOINCREMENT NOT NULL, id_tipomanejo integer NOT NULL, nome TEXT NOT NULL, pesoinicial integer NOT NULL, pesofinal integer NOT NULL)'],
    ['CREATE TABLE IF NOT EXISTS tipomanejo (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL)'],
    ])
    .then(() => {
      this.getAll();
      this.getTipoManejo();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
}
 

add() {
  if (!this.nome.length) {
    alert("Entre com o nome do Aparte !");
    return;
  }
  if (this.id_tipomanejo==0) {
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
 

 this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,id_tipomanejo,pesoinicial,pesofinal) VALUES (?,?,?,?)',[this.nome,this.id_tipomanejo,this.pesoinicial,this.pesofinal])
    
  .then(() => {
      alert('Aparte Inserido !');
      this.nome="";
      this.id_tipomanejo=0; 
      this.pesoinicial=0;
      this.pesofinal=0;
      this.getAll();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
   
  }

  getAll() {
    this.databaseObj.executeSql("SELECT aparte.id,aparte.nome,aparte.pesoinicial,aparte.pesofinal,tipomanejo.nome as nometipomanejo FROM aparte, tipomanejo where aparte.id_tipomanejo=tipomanejo.id", [])
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

  getTipoManejo() {
    this.databaseObj.executeSql("SELECT * FROM tipomanejo ", [])
      .then((res) => {
        this.tipomanejos = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.tipomanejos.push(res.rows.item(i));
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
      alert("Raça removida !");
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
