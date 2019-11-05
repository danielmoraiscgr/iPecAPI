import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'app-produtor',
  templateUrl: './produtor.page.html',
  styleUrls: ['./produtor.page.scss'],
})
export class ProdutorPage implements OnInit {
 
  databaseObj: SQLiteObject; // Database instance object
  nome:string="";
  email:string="";

  name_model:string = ""; // Input field model
  row_data: any = []; // Table rows
  readonly database_name:string = "ipedDB"; // DB name
  readonly table_name:string = "produtor"; // Table name


  constructor(private sqlite: SQLite){
        
  }

  
 
  createDB() {

    this.sqlite.create({
       name: this.database_name,
       location: 'default'
     })
       .then((db: SQLiteObject) => {
         this.databaseObj = db;
         //alert('Banco de dados Criado !');
         this.createTable();
       })
       .catch(e => {
         alert("error " + JSON.stringify(e))
       });
 }

  createTable() {
  this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (pid INTEGER PRIMARY KEY, nome varchar(255) not null, email varchar(255) not null)', [])
    .then(() => {
      //alert('Tabela Produtor criada !');
      this.getAll();
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
}
 

add() {
  if (!this.nome.length) {
    alert("Entre com o nome !");
    return;
  }
 // this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,email) VALUES ("' + this.nome+ '"'+this.email+'")', [])
 this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,email) VALUES ("' + this.nome+ '","'+this.email+'")', [])
    
  .then(() => {
      alert('Produtor Inserido !');
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
  this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, [])
    .then((res) => {
      alert("Produtor removido !");
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
        //this.getAll(); 
    
  }



}
