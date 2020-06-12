import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let DatabaseService = class DatabaseService {
    constructor() {
        /*
      }
      
      public getDB(){
        return this.sqlite.create({
          name: 'ipedDB',
          location: 'default'
        });
      }
      
      public async createDatabase(){
         try {
          const db = await this.getDB();
          this.createTables(db);
        }
        catch (e) {
          return console.error(e);
        }
      }
      
      public createTables( db: SQLiteObject){
          try {
          db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS produtor (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, email TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS fazenda (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, id_produtor integer, FOREIGN KEY(id_produtor) REFERENCES produtor(id)) ON DELETE CASCADE'],
            ['CREATE TABLE IF NOT EXISTS categoria (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS raca (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL'],
            ['CREATE TABLE IF NOT EXISTS aparte (id integer primary key AUTOINCREMENT NOT NULL, lote TEXT NOT NULL, nome TEXT NOT NULL, peso_ini integer NOT NULL, peso_fim NOT NULL'],
            ['CREATE TABLE IF NOT EXISTS animal (id integer primary key AUTOINCREMENT NOT NULL, id_produtor integer NOT NULL, id_fazenda integer NOT NULL, id_animal varchar(15) NOT NULL, DataNasc date NOT NULL, id_categoria NOT NULL, id_raca integer NOT NULL, sexo varchar(5) NOT NULL, ativo integer NOT NULL, FOREIGN KEY(id_produtor) REFERENCES produtor(id)) ON DELETE CASCADE, FOREIGN KEY(id_fazenda) REFERENCES fazenda(id)) ON DELETE CASCADE'],
            ['CREATE TABLE IF NOT EXISTS tipomanejo (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL'],
            ['CREATE TABLE IF NOT EXISTS manejo (id integer primary key AUTOINCREMENT NOT NULL, data date NOT NULL, id_tipomanejo integer NOT NULL, id_produtor integer NOT NULL, id_fazenda integer NOT NULL, id_animal varchar(15) NOT NULL, peso REAL NOT NULL, id_aparte NOT NULL, FOREIGN KEY(id_produtor) REFERENCES produtor(id)) ON DELETE CASCADE, FOREIGN KEY(id_fazenda) REFERENCES fazenda(id)) ON DELETE CASCADE']
          ]);
           alert('Deu certo a criação das tabelas ');
        }
        catch (e) {
          return console.error(e);
        }
      }  */
    }
};
DatabaseService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DatabaseService);
export { DatabaseService };
//# sourceMappingURL=database.service.js.map