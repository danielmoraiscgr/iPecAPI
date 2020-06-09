(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saldoporcategoria-saldoporcategoria-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saldoporcategoria/saldoporcategoria.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saldoporcategoria/saldoporcategoria.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar> \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Saldo por Categoria</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n   \n      <ion-item>\n          <ion-label position=\"floating\">Produtor</ion-label>\n          <ion-select (blur)=\"onBlur(getFazendas(id_produtor))\" name=\"idprodutor\"  [(ngModel)]=\"id_produtor\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let produtor of produtores\" value={{produtor.id}}>{{produtor.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n    \n        <ion-item>\n            <ion-label position=\"floating\">Fazenda</ion-label>\n            <ion-select name=\"idfazenda\"  [(ngModel)]=\"id_fazenda\" okText=\"Ok\" cancelText=\"Voltar\">\n             <ion-select-option *ngFor=\"let fazenda of fazendas\" value={{fazenda.id}}>{{fazenda.nome}}</ion-select-option>\n            </ion-select> \n          </ion-item>\n\n          <ion-button expand=\"full\" (click)=\"saldoporCategoria()\"> Calcular Saldos  </ion-button>\n          <ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar campos  </ion-button>\n\n          <ion-item-sliding *ngFor=\"let totalizacao of saldoporcategorias\">\n          <ion-item>\n              <ion-label text-wrap>\n                  <h3> Categoria        : {{ totalizacao.nomecategoria }}</h3>\n                  <h3> Saldo de cabeças : {{ totalizacao.totalcab}} </h3>\n          </ion-label>\n          </ion-item>    \n          </ion-item-sliding> \n\n</ion-content>\n<ion-footer *ngFor=\"let total of totalcabs\">\n  <ion-toolbar>\n    <ion-title>Total : {{total.totalanimais}}  </ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/saldoporcategoria/saldoporcategoria.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/saldoporcategoria/saldoporcategoria.module.ts ***!
  \***************************************************************/
/*! exports provided: SaldoporcategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaldoporcategoriaPageModule", function() { return SaldoporcategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saldoporcategoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saldoporcategoria.page */ "./src/app/saldoporcategoria/saldoporcategoria.page.ts");







const routes = [
    {
        path: '',
        component: _saldoporcategoria_page__WEBPACK_IMPORTED_MODULE_6__["SaldoporcategoriaPage"]
    }
];
let SaldoporcategoriaPageModule = class SaldoporcategoriaPageModule {
};
SaldoporcategoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_saldoporcategoria_page__WEBPACK_IMPORTED_MODULE_6__["SaldoporcategoriaPage"]]
    })
], SaldoporcategoriaPageModule);



/***/ }),

/***/ "./src/app/saldoporcategoria/saldoporcategoria.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/saldoporcategoria/saldoporcategoria.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGRvcG9yY2F0ZWdvcmlhL3NhbGRvcG9yY2F0ZWdvcmlhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saldoporcategoria/saldoporcategoria.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/saldoporcategoria/saldoporcategoria.page.ts ***!
  \*************************************************************/
/*! exports provided: SaldoporcategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaldoporcategoriaPage", function() { return SaldoporcategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let SaldoporcategoriaPage = class SaldoporcategoriaPage {
    constructor(sqlite, toastCtrl) {
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.database_name = "ipedDB"; // DB name
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.saldoporcategorias = [];
        this.produtores = [];
        this.fazendas = [];
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
            this.getProdutores();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    saldoporCategoria() {
        this.databaseObj.executeSql("SELECT animal.id_categoria,categoria.nome as nomecategoria,count(*) as totalcab from animal,categoria where animal.id_produtor=? and animal.id_fazenda=? and animal.id_categoria=categoria.id  group by animal.id_categoria,categoria.nome", [this.id_produtor, this.id_fazenda])
            .then((res) => {
            this.saldoporcategorias = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.saldoporcategorias.push(res.rows.item(i));
                }
            }
            this.totalanimais();
            let toast = this.toastCtrl.create({
                message: 'Calculo realizado ! ',
                duration: 3000,
                position: 'top'
            });
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    totalanimais() {
        this.databaseObj.executeSql("SELECT count(*) as totalanimais from animal where  animal.id_produtor=? and animal.id_fazenda=?", [this.id_produtor, this.id_fazenda])
            .then((res) => {
            this.totalcabs = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.totalcabs.push(res.rows.item(i));
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
    }
    clearfields() {
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.saldoporcategorias = [];
    }
    ngOnInit() {
        this.createDB();
    }
};
SaldoporcategoriaPage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
SaldoporcategoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saldoporcategoria',
        template: __webpack_require__(/*! raw-loader!./saldoporcategoria.page.html */ "./node_modules/raw-loader/index.js!./src/app/saldoporcategoria/saldoporcategoria.page.html"),
        styles: [__webpack_require__(/*! ./saldoporcategoria.page.scss */ "./src/app/saldoporcategoria/saldoporcategoria.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], SaldoporcategoriaPage);



/***/ })

}]);
//# sourceMappingURL=saldoporcategoria-saldoporcategoria-module-es2015.js.map