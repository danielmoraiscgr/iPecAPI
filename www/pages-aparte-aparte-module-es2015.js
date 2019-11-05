(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aparte-aparte-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/aparte/aparte.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/aparte/aparte.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Cadastro de Apartes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item>\n    <ion-label>Tipo Manejo </ion-label>\n    <ion-select name=\"idtipomanejo\"  [(ngModel)]=\"id_tipomanejo\"  okText=\"Ok\" cancelText=\"Voltar\">\n     <ion-select-option *ngFor=\"let tipomanejo of tipomanejos\" value={{tipomanejo.id}}>{{tipomanejo.nome}}</ion-select-option>\n    </ion-select> \n  </ion-item>\n\n<ion-item>\n<ion-label position=\"fixed\">Nome Aparte : </ion-label>\n<ion-input [(ngModel)]=\"nome\"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"fixed\">Peso inicial : </ion-label>\n    <ion-input [(ngModel)]=\"pesoinicial\"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"fixed\">Peso final : </ion-label>\n    <ion-input [(ngModel)]=\"pesofinal\"></ion-input>\n</ion-item>\n\n<ion-button expand=\"full\" (click)=\"add()\"> Salvar </ion-button>\n\n<ion-list>\n\n<ion-list-header>\n   <ion-label> \n        Listagem\n   </ion-label>\n</ion-list-header>\n\n<ion-item-sliding *ngFor=\"let item of row_data\">\n <ion-item>\n     <ion-label text-wrap>\n         <h3> Tipo Manejo  : {{ item.nometipomanejo }}</h3>\n         <h3> Nome Aparte  : {{ item.nome }}</h3>\n         <h3> Peso Inicial : > = {{ item.pesoinicial }} </h3>\n         <h3> Peso Final   : < = {{ item.pesofinal }}</h3>\n          \n     </ion-label>\n </ion-item>    \n <ion-item-options side=\"end\">\n      <ion-item-option color=\"secondary\" (click)=\"update(item)\">Alterar</ion-item-option>\n      <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/aparte/aparte.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/aparte/aparte.module.ts ***!
  \***********************************************/
/*! exports provided: ApartePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartePageModule", function() { return ApartePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aparte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aparte.page */ "./src/app/pages/aparte/aparte.page.ts");







const routes = [
    {
        path: '',
        component: _aparte_page__WEBPACK_IMPORTED_MODULE_6__["ApartePage"]
    }
];
let ApartePageModule = class ApartePageModule {
};
ApartePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_aparte_page__WEBPACK_IMPORTED_MODULE_6__["ApartePage"]]
    })
], ApartePageModule);



/***/ }),

/***/ "./src/app/pages/aparte/aparte.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/aparte/aparte.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwYXJ0ZS9hcGFydGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/aparte/aparte.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/aparte/aparte.page.ts ***!
  \*********************************************/
/*! exports provided: ApartePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartePage", function() { return ApartePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");



let ApartePage = class ApartePage {
    constructor(sqlite) {
        this.sqlite = sqlite;
        this.nome = "";
        this.pesoinicial = 0;
        this.pesofinal = 0;
        this.row_data = []; // Table rows
        this.tipomanejos = [];
        this.database_name = "ipedDB"; // DB name
        this.table_name = "aparte"; // Table name
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
            alert("error " + JSON.stringify(e));
        });
    }
    add() {
        if (!this.nome.length) {
            alert("Entre com o nome do Aparte !");
            return;
        }
        if (this.id_tipomanejo == 0) {
            alert("Entre com o Tipo de Manejo !");
            return;
        }
        if (this.pesoinicial == 0) {
            alert("Entre com o Peso Inicial do Aparte !");
            return;
        }
        if (this.pesofinal == 0) {
            alert("Entre com o Peso Final !");
            return;
        }
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,id_tipomanejo,pesoinicial,pesofinal) VALUES (?,?,?,?)', [this.nome, this.id_tipomanejo, this.pesoinicial, this.pesofinal])
            .then(() => {
            alert('Aparte Inserido !');
            this.nome = "";
            this.id_tipomanejo = 0;
            this.pesoinicial = 0;
            this.pesofinal = 0;
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
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
            alert("error " + JSON.stringify(e));
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
            alert("error " + JSON.stringify(e));
        });
    }
    delete(item) {
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE id = " + item.id, [])
            .then((res) => {
            alert("Raça removida !");
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
ApartePage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
];
ApartePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aparte',
        template: __webpack_require__(/*! raw-loader!./aparte.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/aparte/aparte.page.html"),
        styles: [__webpack_require__(/*! ./aparte.page.scss */ "./src/app/pages/aparte/aparte.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
], ApartePage);



/***/ })

}]);
//# sourceMappingURL=pages-aparte-aparte-module-es2015.js.map