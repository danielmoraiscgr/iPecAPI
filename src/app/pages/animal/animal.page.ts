import { Component, OnInit } from '@angular/core';
import { SQLite , SQLiteObject} from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  databaseObj: SQLiteObject; // Database instance object
  identAnimal:string="";
  id_produtor:number=0; 
  id_fazenda:number=0; 
  id_categoria:number=0; 
  id_raca:number=0; 
  ativo:number=0; 

  row_data: any = []; // Table rows
  produtores: any = [];
  fazendas: any = [];
  categorias: any = [];
  racas: any = []; 


  readonly database_name:string = "ipedDB"; // DB name
  readonly table_name:string = "animal"; // Table name


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
    ['CREATE TABLE IF NOT EXISTS animal (id integer primary key AUTOINCREMENT NOT NULL, identanimal TEXT NOT NULL, id_produtor integer NOT NULL, id_fazenda intger NOT NULL, id_categoria integer NOT NULL, id_raca integer NOT NULL, ativo integer NOT NULL)'],
    ['CREATE TABLE IF NOT EXISTS produtor (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, email TEXT NOT NULL)'],
    ['CREATE TABLE IF NOT EXISTS fazenda (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, id_produtor integer)'],
    ['CREATE TABLE IF NOT EXISTS categoria (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, sexo TEXT NOT NULL)'],
    ['CREATE TABLE IF NOT EXISTS raca (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL)'],
    ])
    .then(() => {
      this.getAll();
      this.getProdutores();
      this.getFazendas(); 
      this.getCategorias(); 
      this.getRacas(); 
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
}
 

add() {
  if (!this.identAnimal.length){
    alert("Entre com a Identificação do Animal ! ");
    return;
  }
  if (this.id_produtor==0) {
    alert("Entre com o Produtor !");
    return;
  }
  if (this.id_fazenda==0) {
    alert("Entre com a Fazenda!");
    return;
  }
  if (this.id_categoria==0) {
    alert("Entre com a Categoria !");
    return;
  }
  if (this.id_raca==0) {
    alert("Entre com a Raça !");
    return;
  }
 

 this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (identanimal,id_produtor,id_fazenda,id_categoria,id_raca,ativo) VALUES (?,?,?,?,?,?)',[this.identAnimal,this.id_produtor,this.id_fazenda,this.id_categoria,this.id_raca,this.ativo])
    
  .then(() => {
      alert('Animal Inserido !');
      this.identAnimal=""; 
      this.id_produtor=0;
      this.id_fazenda=0;
      this.id_categoria=0;
      this.id_raca=0;
      this.getAll();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
   
  }

  getAll() {
    this.databaseObj.executeSql("SELECT animal.identanimal,produtor.nome as nomeprodutor,fazenda.nome as nomefazenda,categoria.nome as nomecategoria,raca.nome as nomeraca,animal.ativo from animal , produtor, fazenda, categoria, raca where animal.id_produtor=produtor.id and animal.id_fazenda=fazenda.id and animal.id_categoria=categoria.id and animal.id_raca=raca.id", [])
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

  getFazendas() {
    this.databaseObj.executeSql("SELECT * FROM fazenda",[])
      .then((res) => {
        this.fazendas = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.fazendas.push(res.rows.item(i));
          }
          }
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }
  
  getCategorias() {
    this.databaseObj.executeSql("SELECT * FROM categoria",[])
      .then((res) => {
        this.categorias = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.categorias.push(res.rows.item(i));
          }
          }
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }

  getRacas() {
    this.databaseObj.executeSql("SELECT * FROM raca",[])
      .then((res) => {
        this.racas = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.racas.push(res.rows.item(i));
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
      alert("Animal removido !");
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
