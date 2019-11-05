(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manejo-manejo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manejo/manejo.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manejo/manejo.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Cadastro de Manejo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-item>\n      <ion-label>Produtor</ion-label>\n      <ion-select name=\"idprodutor\"  [(ngModel)]=\"id_produtor\" okText=\"Ok\" cancelText=\"Voltar\">\n       <ion-select-option *ngFor=\"let produtor of produtores\" value={{produtor.id}}>{{produtor.nome}}</ion-select-option>\n      </ion-select> \n    </ion-item>\n\n    <ion-item>\n        <ion-label>Fazenda</ion-label>\n        <ion-select name=\"idfazenda\"  [(ngModel)]=\"id_fazenda\" okText=\"Ok\" cancelText=\"Voltar\">\n         <ion-select-option *ngFor=\"let fazenda of fazendas\" value={{fazenda.id}}>{{fazenda.nome}}</ion-select-option>\n        </ion-select> \n      </ion-item>\n    \n      <ion-item>\n          <ion-label position=\"fixed\">Ident. do Animal : </ion-label>\n          <ion-input [(ngModel)]=\"identAnimal\"></ion-input>\n     </ion-item>\n   \n      <ion-item>\n          <ion-label>Categoria</ion-label>\n          <ion-select name=\"idcategoria\"  [(ngModel)]=\"id_categoria\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let categoria of categorias\" value={{categoria.id}}>{{categoria.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n      \n      <ion-item>\n          <ion-label>Raça</ion-label>\n          <ion-select name=\"idraca\"  [(ngModel)]=\"id_raca\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let raca of racas\" value={{raca.id}}>{{raca.nome}}</ion-select-option>\n          </ion-select> \n       </ion-item>\n\n       <ion-item>\n        <ion-label position=\"fixed\">Peso (Kg) : </ion-label>\n        <ion-input [(ngModel)]=\"peso\"></ion-input>\n   </ion-item>\n    \n  \n  <ion-button expand=\"full\" (click)=\"add()\"> Salvar </ion-button>\n  \n  <ion-list>\n  \n  <ion-list-header>\n     <ion-label> \n          Listagem\n     </ion-label>\n  </ion-list-header>\n  \n  <ion-item-sliding *ngFor=\"let item of row_data\">\n   <ion-item>\n       <ion-label text-wrap>\n           <h3> Produtor       : {{ item.nomeprodutor }}</h3>\n           <h3> Fazenda        : {{ item.nomefazenda }}</h3>\n           <h3> Ident. Animal  : {{ item.identanimal}} </h3>\n           <h3> Categoria      : {{ item.nomecategoria }}</h3>\n           <h3> Raça           : {{ item.nomeraca }}</h3>\n           <h3> Peso           : {{ item.peso }}</h3>\n           <h3> Aparte         : {{ item.nomeaparte }}</h3>        \n          \n       </ion-label>\n   </ion-item>    \n   <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"update(item)\">Alterar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n   </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n  \n  </ion-content>\n  "

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmVqby9tYW5lam8ucGFnZS5zY3NzIn0= */"

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



let ManejoPage = class ManejoPage {
    constructor(sqlite) {
        this.sqlite = sqlite;
        this.identAnimal = "";
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.id_categoria = 0;
        this.id_raca = 0;
        this.id_aparte = 0;
        this.peso = 0;
        this.row_data = []; // Table rows
        this.produtores = [];
        this.fazendas = [];
        this.categorias = [];
        this.racas = [];
        this.apartes = [];
        this.database_name = "ipedDB"; // DB name
        this.table_name = "manejo"; // Table name
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
            alert("error " + JSON.stringify(e));
        });
    }
    add() {
        if (!this.identAnimal.length) {
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
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (data,identanimal,id_produtor,id_fazenda,id_categoria,id_raca,peso,id_aparte) VALUES (?,?,?,?,?,?,?,?)', [this.data, this.identAnimal, this.id_produtor, this.id_fazenda, this.id_categoria, this.id_raca, this.peso, this.id_aparte])
            .then(() => {
            alert('Manejo Inserido !');
            this.identAnimal = "";
            this.id_produtor = 0;
            this.id_fazenda = 0;
            this.id_categoria = 0;
            this.id_raca = 0;
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
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
            alert("error " + JSON.stringify(e));
        });
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
    }
    getFazendas() {
        this.databaseObj.executeSql("SELECT * FROM fazenda", [])
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
    }
    getApartes() {
        this.databaseObj.executeSql("SELECT * FROM apartes", [])
            .then((res) => {
            this.apartes = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.apartes.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
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
    update() {
    }
    ngOnInit() {
        this.createDB();
    }
};
ManejoPage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
];
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