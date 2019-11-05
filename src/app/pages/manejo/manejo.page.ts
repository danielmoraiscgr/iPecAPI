import { Component, OnInit } from '@angular/core';
import { SQLite , SQLiteObject} from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-manejo',
  templateUrl: './manejo.page.html',
  styleUrls: ['./manejo.page.scss'],
})
export class ManejoPage implements OnInit {


  databaseObj: SQLiteObject; // Database instance object
  data:Date;
  identAnimal:string="";
  id_produtor:number=0; 
  id_fazenda:number=0; 
  id_categoria:number=0; 
  id_raca:number=0; 
  id_aparte:number=0;
  peso:number=0;

  row_data: any = []; // Table rows
  produtores: any = [];
  fazendas: any = [];
  categorias: any = [];
  racas: any = []; 
  apartes: any = [];


  readonly database_name:string = "ipedDB"; // DB name
  readonly table_name:string = "manejo"; // Table name


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
    ['CREATE TABLE IF NOT EXISTS manejo (id integer primary key AUTOINCREMENT NOT NULL, id_produtor integer NOT NULL, id_fazenda integer NOT NULL, data date NOT NULL, id_tipomanejo integer NOT NULL, identanimal varchar(15) NOT NULL, id_categoria integer NOT NULL, id_raca integer NOT NULL, peso REAL NOT NULL, id_aparte NOT NULL'],
  ])
    .then(() => {
      this.getAll();
      this.getProdutores();
      this.getFazendas(); 
      this.getCategorias(); 
      this.getRacas(); 
      this.getApartes(); 
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

 this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (data,identanimal,id_produtor,id_fazenda,id_categoria,id_raca,peso,id_aparte) VALUES (?,?,?,?,?,?,?,?)',[this.data,this.identAnimal,this.id_produtor,this.id_fazenda,this.id_categoria,this.id_raca,this.peso,this.id_aparte])
    
  .then(() => {
      alert('Manejo Inserido !');
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
    this.databaseObj.executeSql("SELECT manejo.data,manejo.identanimal,produtor.nome as nomeprodutor,fazenda.nome as nomefazenda,categoria.nome as nomecategoria,raca.nome as nomeraca,aparte.nome as nomeaparte from manejo , produtor, fazenda, categoria, raca, aparte where manejo.id_produtor=produtor.id and manejo.id_fazenda=fazenda.id and manejo.id_categoria=categoria.id and manejo.id_raca=raca.id and manejo.id_aparte=aparte.id", [])
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

  getApartes() {
    this.databaseObj.executeSql("SELECT * FROM apartes",[])
      .then((res) => {
        this.apartes = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.apartes.push(res.rows.item(i));
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
      alert("Manejo removido !");
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
