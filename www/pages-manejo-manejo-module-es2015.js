(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manejo-manejo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manejo/manejo.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manejo/manejo.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Cadastro de Manejo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content transparent>\n  <ion-card>\n    <ion-input hidden [(ngModel)]=\"id\"></ion-input>\n\n  <ion-item>\n    <ion-label position=\"floating\">Data Manejo</ion-label>\n    <ion-datetime displayformat=\"dd/MM/yyyy\" name=\"datamanejo\" min=\"2019\" max=\"2030-01-01\" [(ngModel)]=\"data\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">Tipo Manejo</ion-label>\n      <ion-select (blur)=\"onBlur(getApartes(id_tipomanejo))\" [(ngModel)]=\"id_tipomanejo\" okText=\"Ok\" cancelText=\"Voltar\">\n       <ion-select-option *ngFor=\"let tipomanejo of tipomanejos\" value={{tipomanejo.id}}>{{tipomanejo.nome}}</ion-select-option>\n      </ion-select> \n    </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">Produtor</ion-label>\n      <ion-select (blur)=\"onBlur(getFazendas(id_produtor))\" [(ngModel)]=\"id_produtor\" okText=\"Ok\" cancelText=\"Voltar\">\n       <ion-select-option *ngFor=\"let produtor of produtores\" value={{produtor.id}}>{{produtor.nome}}</ion-select-option>\n      </ion-select> \n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\">Fazenda</ion-label>\n        <ion-select  [(ngModel)]=\"id_fazenda\" okText=\"Ok\" cancelText=\"Voltar\">\n         <ion-select-option *ngFor=\"let fazenda of fazendas\" value={{fazenda.id}}>{{fazenda.nome}}</ion-select-option>\n        </ion-select> \n      </ion-item>\n    \n      <ion-item>\n          <ion-label color=\"danger\"  position=\"floating\">N. Animal : </ion-label>\n          <ion-input [(ngModel)]=\"identanimal\"></ion-input> \n     </ion-item>\n   \n      <ion-item>\n          <ion-label position=\"floating\">Categoria</ion-label>\n          <ion-select [(ngModel)]=\"id_categoria\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let categoria of categorias\" value={{categoria.id}}>{{categoria.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n      \n      <ion-item>\n          <ion-label position=\"floating\">Raça</ion-label>\n          <ion-select [(ngModel)]=\"id_raca\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let raca of racas\" value={{raca.id}}>{{raca.nome}}</ion-select-option>\n          </ion-select> \n       </ion-item>\n       \n       <ion-item>\n        <ion-label color=\"danger\" position=\"floating\">Peso (Kg) : </ion-label>\n        <ion-input  type=\"number\" [(ngModel)]=\"peso\"></ion-input>\n       </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Aparte</ion-label>\n          <ion-select  [(ngModel)]=\"id_aparte\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let aparte of apartes\" value={{aparte.id}}>{{aparte.nome}}</ion-select-option>\n          </ion-select> \n       </ion-item>\n      </ion-card> \n       <ion-button expand=\"full\" (click)=\"save()\"> Salvar </ion-button>\n       <ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar Campos </ion-button>\n    <!--  <ion-button expand=\"full\" (click)=\"importarManejo()\"> Importar Manejo de Trabalho </ion-button>\n       <ion-button expand=\"full\" (click)=\"limparManejos()\"> Excluir todos os Manejos </ion-button> -->      \n  \n  <ion-list>\n  \n  <ion-list-header>\n     <ion-label> \n          Listagem\n     </ion-label>\n  </ion-list-header>\n  <ion-item-sliding *ngFor=\"let item of row_data\">\n    <ion-card>\n    <ion-item>\n       <ion-label text-wrap>\n           <h3> Data           : {{ item.data | date: 'dd/MM/yyyy'  }} </h3>\n           <h3> Tipo de Manejo : {{ item.nometipomanejo }}</h3>           \n           <h3> Produtor       : {{ item.nomeprodutor }}</h3>\n           <h3> Fazenda        : {{ item.nomefazenda }}</h3>\n           <h3> Ident. Animal  : {{ item.identanimal}} </h3>\n           <h3> Categoria      : {{ item.nomecategoria }}</h3>\n           <h3> Raça           : {{ item.nomeraca }}</h3>\n           <h3> Peso           : {{ item.peso }}</h3>\n           <h3> Aparte         : {{ item.nomeaparte }}</h3>                  \n       </ion-label>\n   </ion-item>   \n   <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"update(item)\">Alterar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n   </ion-item-options>\n  </ion-card> \n  </ion-item-sliding>\n  </ion-list>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/manejo/manejo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/manejo/manejo.module.ts ***!
  \***********************************************/
/*! exports provided: ManejoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManejoPageModule", function() { return ManejoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manejo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manejo.page */ "./src/app/pages/manejo/manejo.page.ts");







const routes = [
    {
        path: '',
        component: _manejo_page__WEBPACK_IMPORTED_MODULE_6__["ManejoPage"]
    }
];
let ManejoPageModule = class ManejoPageModule {
};
ManejoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_manejo_page__WEBPACK_IMPORTED_MODULE_6__["ManejoPage"]]
    })
], ManejoPageModule);



/***/ }),

/***/ "./src/app/pages/manejo/manejo.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/manejo/manejo.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-image: url('logo.JPG');\n  background-size: cover;\n  background-position-x: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxib3JnZXMvRG9jdW1lbnRzL2lvbmljL2lQZWN1YXJpby9zcmMvYXBwL3BhZ2VzL21hbmVqby9tYW5lam8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYW5lam8vbWFuZWpvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFuZWpvL21hbmVqby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2Vucy9sb2dvLkpQRycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XG4gIH1cbiIsImlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlbnMvbG9nby5KUEdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/manejo/manejo.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/manejo/manejo.page.ts ***!
  \*********************************************/
/*! exports provided: ManejoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManejoPage", function() { return ManejoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ManejoPage = class ManejoPage {
    constructor(sqlite) {
        this.sqlite = sqlite;
        this.id = 0;
        this.identanimal = "";
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.id_categoria = 0;
        this.id_raca = 0;
        this.id_aparte = 0;
        this.peso = null;
        this.row_data = [];
        this.tipomanejos = [];
        this.produtores = [];
        this.fazendas = [];
        this.categorias = [];
        this.racas = [];
        this.apartes = [];
        this.database_name = "ipedDB"; // DB name
        this.table_name = "manejo"; // Table name
    }
    scrollToTop() {
        this.content.scrollToTop(400);
    }
    ionViewDidEnter() {
        this.scrollToTop();
    }
    createDB() {
        this.sqlite.create({
            name: this.database_name,
            location: 'default'
        })
            .then((db) => {
            this.databaseObj = db;
            this.createTable();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    createTable() {
        this.databaseObj.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS animal (id integer primary key AUTOINCREMENT NOT NULL, identanimal TEXT NOT NULL, id_produtor integer NOT NULL, id_fazenda intger NOT NULL, id_categoria integer NOT NULL, id_raca integer NOT NULL, ativo integer NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS produtor (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, email TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS fazenda (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, id_produtor integer)'],
            ['CREATE TABLE IF NOT EXISTS categoria (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, sexo TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS raca (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS manejo (id integer primary key AUTOINCREMENT NOT NULL, id_produtor integer NOT NULL, id_fazenda integer NOT NULL, data date NOT NULL, id_tipomanejo integer NOT NULL, identanimal varchar(15) NOT NULL, id_categoria integer NOT NULL, id_raca integer NOT NULL, peso REAL NOT NULL, id_aparte NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS aparte (id integer primary key AUTOINCREMENT NOT NULL, id_tipomanejo integer NOT NULL, nome TEXT NOT NULL, pesoinicial integer NOT NULL, pesofinal integer NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS tipomanejo (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL)']
        ])
            .then(() => {
            this.getAll();
            this.getTipoManejos();
            this.getProdutores();
            this.getCategorias();
            this.getRacas();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    save() {
        if (!this.identanimal.length) {
            alert("Entre com a Identificação do Animal ! ");
            return;
        }
        if (this.id_produtor == 0) {
            alert("Entre com o Produtor !");
            return;
        }
        if (this.id_fazenda == 0) {
            alert("Entre com a Fazenda!");
            return;
        }
        if (this.id_categoria == 0) {
            alert("Entre com a Categoria !");
            return;
        }
        if (this.id_raca == 0) {
            alert("Entre com a Raça !");
            return;
        }
        if (this.id != 0) {
            this.databaseObj.executeSql('UPDATE ' + this.table_name + ' set data=?,id_tipomanejo=?,identanimal=?,id_produtor=?,id_fazenda=?,id_categoria=?,id_raca=?,peso=?,id_aparte=? where id=?', [this.data, this.id_tipomanejo, this.identanimal, this.id_produtor, this.id_fazenda, this.id_categoria, this.id_raca, this.peso, this.id_aparte, this.id])
                .then(() => {
                alert('Manejo Atualizado !');
                this.clearfields();
                this.getAll();
            })
                .catch(e => {
                alert("error " + JSON.stringify(e));
            });
        }
        else {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (data,id_tipomanejo,identanimal,id_produtor,id_fazenda,id_categoria,id_raca,peso,id_aparte) VALUES (?,?,?,?,?,?,?,?,?)', [this.data, this.id_tipomanejo, this.identanimal, this.id_produtor, this.id_fazenda, this.id_categoria, this.id_raca, this.peso, this.id_aparte])
                .then(() => {
                alert('Manejo Inserido !');
                this.clearfields();
                this.getAll();
            })
                .catch(e => {
                alert("error " + JSON.stringify(e));
            });
        }
        this.scrollToTop();
    }
    getAll() {
        this.databaseObj.executeSql('SELECT manejo.id,manejo.data,manejo.id_tipomanejo,tipomanejo.nome as nometipomanejo,manejo.identanimal,manejo.id_produtor,produtor.nome as nomeprodutor,manejo.id_fazenda,fazenda.nome as nomefazenda,manejo.id_categoria,categoria.nome as nomecategoria,manejo.id_raca,raca.nome as nomeraca,manejo.id_aparte,aparte.nome as nomeaparte,manejo.peso from manejo , produtor, tipomanejo, fazenda, categoria, raca, aparte where manejo.id_produtor=produtor.id and manejo.id_fazenda=fazenda.id and manejo.id_categoria=categoria.id and manejo.id_raca=raca.id and manejo.id_aparte=aparte.id and manejo.id_tipomanejo=tipomanejo.id', [])
            .then((res) => {
            this.row_data = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.row_data.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    getTipoManejos() {
        this.databaseObj.executeSql("SELECT * FROM tipomanejo", [])
            .then((res) => {
            this.tipomanejos = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.tipomanejos.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    compareFn(e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    }
    getProdutores() {
        this.databaseObj.executeSql("SELECT * FROM produtor", [])
            .then((res) => {
            this.produtores = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.produtores.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
        const compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = compareWithFn;
    }
    getFazendas(id_produtor) {
        this.databaseObj.executeSql("SELECT * FROM fazenda where id_produtor=?", [this.id_produtor])
            .then((res) => {
            this.fazendas = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.fazendas.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
        const compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = compareWithFn;
    }
    getCategorias() {
        this.databaseObj.executeSql("SELECT * FROM categoria", [])
            .then((res) => {
            this.categorias = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.categorias.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
        const compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = compareWithFn;
    }
    getRacas() {
        this.databaseObj.executeSql("SELECT * FROM raca", [])
            .then((res) => {
            this.racas = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.racas.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
        const compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = compareWithFn;
    }
    getApartes(id_tipomanejo) {
        this.databaseObj.executeSql("SELECT * FROM aparte where id_tipomanejo=?", [this.id_tipomanejo])
            .then((res) => {
            this.apartes = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.apartes.push(res.rows.item(i));
                }
            }
            this.id_aparte = this.apartes.id;
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
        const compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = compareWithFn;
    }
    delete(item) {
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE id = " + item.id, [])
            .then((res) => {
            alert("Manejo removido !");
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    limparManejos() {
        this.databaseObj.executeSql("DELETE FROM " + this.table_name, [])
            .then((res) => {
            alert("Manejos excluidos  !");
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    update(item) {
        this.id = item.id;
        this.data = item.data;
        this.id_tipomanejo = item.id_tipomanejo;
        this.identanimal = item.identanimal;
        this.id_produtor = item.id_produtor;
        this.id_fazenda = item.id_fazenda;
        this.id_categoria = item.id_categoria;
        this.id_raca = item.id_raca;
        this.peso = item.peso;
        this.id_aparte = item.id_aparte;
        this.getFazendas(this.id_produtor);
        this.scrollToTop();
    }
    clearfields() {
        this.id = 0;
        this.data = null;
        this.id_tipomanejo = 0;
        this.identanimal = "";
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.id_categoria = 0;
        this.id_raca = 0;
        this.peso = null;
        this.id_aparte = 0;
    }
    importarManejo() {
        this.databaseObj.sqlBatch([
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000001", 1, 1, 120, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000002", 1, 1, 135, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000003", 1, 1, 140, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000004", 1, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000005", 1, 1, 156, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000006", 1, 1, 166, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000007", 1, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000008", 1, 1, 132, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000009", 1, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000010", 1, 1, 114, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000011", 1, 1, 153, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000012", 1, 1, 163, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000013", 1, 1, 123, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000014", 1, 1, 138, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000015", 1, 1, 145, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000016", 1, 1, 116, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000017", 1, 1, 151, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000018", 1, 1, 161, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000019", 1, 1, 119, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000020", 1, 1, 132, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000021", 1, 1, 115, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000022", 1, 1, 157, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000023", 1, 1, 156, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000024", 1, 1, 180, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000025", 1, 1, 110, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000026", 1, 1, 130, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000027", 1, 1, 167, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000028", 1, 1, 158, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000029", 1, 1, 154, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000030", 1, 1, 165, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000031", 1, 1, 120, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000032", 1, 1, 135, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000033", 1, 1, 140, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000034", 1, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000035", 1, 1, 156, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000036", 1, 1, 166, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000037", 1, 1, 120, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000038", 1, 1, 135, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000039", 1, 1, 140, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000040", 1, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000041", 1, 1, 156, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000042", 1, 1, 166, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000043", 1, 1, 120, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000044", 1, 1, 135, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000045", 1, 1, 140, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000046", 1, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000047", 1, 1, 156, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000048", 1, 1, 166, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000049", 1, 1, 120, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000050", 1, 1, 135, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000051", 1, 1, 140, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000052", 1, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000053", 1, 1, 156, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000054", 1, 1, 166, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000055", 1, 1, 120, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000056", 1, 1, 135, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000057", 1, 1, 140, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000058", 1, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000059", 1, 1, 156, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000060", 1, 1, 166, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000061", 2, 1, 120, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000062", 2, 1, 135, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000063", 2, 1, 140, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000064", 2, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000065", 2, 1, 156, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000066", 2, 1, 166, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000067", 2, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000068", 2, 1, 132, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000069", 2, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000070", 2, 1, 114, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000071", 2, 1, 153, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000072", 2, 1, 163, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000073", 2, 1, 123, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000074", 2, 1, 138, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000075", 2, 1, 145, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000076", 2, 1, 116, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000077", 2, 1, 151, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000078", 2, 1, 161, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000079", 2, 1, 119, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000080", 2, 1, 132, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000081", 2, 1, 115, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000082", 2, 1, 157, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000083", 2, 1, 156, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000084", 2, 1, 180, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000085", 2, 1, 110, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000086", 2, 1, 130, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000087", 2, 1, 167, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000088", 2, 1, 158, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000089", 2, 1, 154, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000090", 2, 1, 165, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000091", 2, 1, 120, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000092", 2, 1, 135, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000093", 2, 1, 140, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000094", 2, 1, 117, 1)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000095", 2, 1, 156, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 1, "000096", 2, 1, 166, 2)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001001", 3, 1, 380, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001002", 3, 1, 378, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001003", 3, 2, 350, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001004", 3, 1, 400, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001005", 3, 1, 410, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001006", 3, 1, 409, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001007", 3, 2, 378, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001008", 3, 1, 360, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001009", 3, 2, 399, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001010", 3, 1, 401, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001011", 3, 2, 431, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001012", 3, 1, 414, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001013", 3, 1, 345, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001014", 3, 2, 330, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001015", 3, 1, 340, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001016", 3, 2, 431, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001017", 3, 1, 444, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001018", 3, 1, 456, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001019", 3, 1, 333, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001020", 3, 2, 345, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001021", 3, 2, 367, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001022", 3, 2, 409, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001023", 3, 1, 418, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001024", 3, 1, 420, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001025", 3, 1, 321, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001026", 3, 2, 356, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001027", 3, 2, 344, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001028", 3, 2, 455, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001029", 3, 1, 431, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001030", 3, 1, 430, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001031", 3, 1, 366, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001032", 3, 2, 348, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001033", 3, 1, 389, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001034", 3, 2, 410, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001035", 3, 1, 430, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001036", 3, 2, 450, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001037", 3, 1, 377, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001038", 3, 2, 389, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001039", 3, 2, 376, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001040", 3, 1, 401, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001041", 3, 2, 430, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001042", 3, 1, 421, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001043", 3, 1, 321, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001044", 3, 1, 349, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001045", 3, 2, 398, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001046", 3, 2, 404, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001047", 3, 1, 410, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001048", 3, 1, 430, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001049", 3, 2, 350, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001050", 3, 1, 386, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001051", 3, 2, 330, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001052", 3, 1, 406, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001053", 3, 2, 415, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001054", 3, 2, 430, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001055", 3, 1, 345, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001056", 3, 2, 350, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001057", 3, 2, 378, 3)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001058", 3, 1, 406, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001059", 3, 1, 410, 4)'],
            ['INSERT INTO MANEJO (DATA, ID_PRODUTOR, ID_FAZENDA, ID_TIPOMANEJO, IDENTANIMAL, ID_CATEGORIA, ID_RACA, PESO, ID_APARTE) VALUES ("2019-11-12", 1, 1, 2, "001060", 3, 1, 420, 4)']
        ])
            .then(() => {
            this.getAll();
            this.getTipoManejos();
            this.getProdutores();
            this.getCategorias();
            this.getRacas();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    ngOnInit() {
        this.createDB();
    }
};
ManejoPage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], ManejoPage.prototype, "content", void 0);
ManejoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manejo',
        template: __webpack_require__(/*! raw-loader!./manejo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manejo/manejo.page.html"),
        styles: [__webpack_require__(/*! ./manejo.page.scss */ "./src/app/pages/manejo/manejo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
], ManejoPage);



/***/ })

}]);
//# sourceMappingURL=pages-manejo-manejo-module-es2015.js.map