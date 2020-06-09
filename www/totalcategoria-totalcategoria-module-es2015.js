(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["totalcategoria-totalcategoria-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/totalcategoria/totalcategoria.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/totalcategoria/totalcategoria.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar> \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Calc por Categoria</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- <ion-item>\n        <ion-label position=\"floating\">Data Inicial</ion-label>\n        <ion-datetime displayformat=\"dd/MM/yyyy\" name=\"datainicial_manejo\" min=\"2019\" max=\"2030-01-01\" [(ngModel)]=\"datainicial\"></ion-datetime>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label position=\"floating\">Data Final</ion-label>\n        <ion-datetime displayformat=\"dd/MM/yyyy\" name=\"datafinal_manejo\" min=\"2019\" max=\"2030-01-01\" [(ngModel)]=\"datafinal\"></ion-datetime>\n      </ion-item> -->\n<ion-card>\n      <ion-item>\n          <ion-label position=\"floating\">Tipo Manejo</ion-label>\n          <ion-select name=\"idtipomanejo\"  [(ngModel)]=\"id_tipomanejo\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let tipomanejo of tipomanejos\" value={{tipomanejo.id}}>{{tipomanejo.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n    \n      <ion-item>\n          <ion-label position=\"floating\">Produtor</ion-label>\n          <ion-select (blur)=\"onBlur(getFazendas(id_produtor))\" name=\"idprodutor\"  [(ngModel)]=\"id_produtor\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let produtor of produtores\" value={{produtor.id}}>{{produtor.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n    \n        <ion-item>\n            <ion-label position=\"floating\">Fazenda</ion-label>\n            <ion-select name=\"idfazenda\"  [(ngModel)]=\"id_fazenda\" okText=\"Ok\" cancelText=\"Voltar\">\n             <ion-select-option *ngFor=\"let fazenda of fazendas\" value={{fazenda.id}}>{{fazenda.nome}}</ion-select-option>\n            </ion-select> \n          </ion-item>\n\n          <ion-button expand=\"full\" (click)=\"totalCategoria()\"> Executar Calculo  </ion-button>\n          <ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar campos  </ion-button>\n</ion-card>\n<ion-card>\n          <ion-item-sliding *ngFor=\"let totalizacao of totalcategorias\">\n          <ion-item>\n              <ion-label text-wrap>\n                  <h3> Categoria      : {{ totalizacao.nomecategoria }}</h3>\n                  <h3> Total          : {{ totalizacao.totalmanejo}} </h3>\n                  <h3> Média          : {{ totalizacao.mediapeso | number}} </h3>     \n          </ion-label>\n          </ion-item>    \n          </ion-item-sliding> \n</ion-card>\n</ion-content>\n<ion-footer *ngFor=\"let total of totalpeso\">\n  <ion-toolbar>\n    <ion-title>Total : {{total.totalmanejo}}  Média(kg) :  {{total.mediapeso  | number }} </ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/totalcategoria/totalcategoria.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/totalcategoria/totalcategoria.module.ts ***!
  \*********************************************************/
/*! exports provided: TotalcategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalcategoriaPageModule", function() { return TotalcategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _totalcategoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./totalcategoria.page */ "./src/app/totalcategoria/totalcategoria.page.ts");







const routes = [
    {
        path: '',
        component: _totalcategoria_page__WEBPACK_IMPORTED_MODULE_6__["TotalcategoriaPage"]
    }
];
let TotalcategoriaPageModule = class TotalcategoriaPageModule {
};
TotalcategoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_totalcategoria_page__WEBPACK_IMPORTED_MODULE_6__["TotalcategoriaPage"]]
    })
], TotalcategoriaPageModule);



/***/ }),

/***/ "./src/app/totalcategoria/totalcategoria.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/totalcategoria/totalcategoria.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvdGFsY2F0ZWdvcmlhL3RvdGFsY2F0ZWdvcmlhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/totalcategoria/totalcategoria.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/totalcategoria/totalcategoria.page.ts ***!
  \*******************************************************/
/*! exports provided: TotalcategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalcategoriaPage", function() { return TotalcategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let TotalcategoriaPage = class TotalcategoriaPage {
    constructor(sqlite, toastCtrl) {
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.database_name = "ipedDB"; // DB name
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalpeso = [];
        this.row_data = [];
        this.totalcategorias = [];
        this.tipomanejos = [];
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
            this.getTipoManejos();
            this.getProdutores();
            //this.totalManejoDia();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    totalCategoria() {
        this.databaseObj.executeSql("SELECT manejo.id_categoria,categoria.nome as nomecategoria,count(*) as totalmanejo,avg(manejo.peso) as mediapeso from manejo,categoria where manejo.id_tipomanejo=? and manejo.id_produtor=? and manejo.id_fazenda=? and manejo.id_categoria=categoria.id  group by manejo.id_categoria,categoria.nome", [this.id_tipomanejo, this.id_produtor, this.id_fazenda])
            .then((res) => {
            this.totalcategorias = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.totalcategorias.push(res.rows.item(i));
                }
            }
            this.totalmediapeso();
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
    totalmediapeso() {
        this.databaseObj.executeSql("SELECT count(*) as totalmanejo,avg(manejo.peso) as mediapeso from manejo where manejo.id_tipomanejo=? and manejo.id_produtor=? and manejo.id_fazenda=?", [this.id_tipomanejo, this.id_produtor, this.id_fazenda])
            .then((res) => {
            this.totalpeso = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.totalpeso.push(res.rows.item(i));
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
        this.datainicial = null;
        this.datafinal = null;
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalpeso = [];
        this.totalcategorias = [];
    }
    diaAtual() {
        //let datamanejo=this.datepipe.transform(this.data, 'MM/dd/yyyy');
        console.log(this.dataHoje());
    }
    dataHoje() {
        var dataatual = new Date();
        var dia = dataatual.getDate();
        var mes = dataatual.getMonth() + 1;
        var ano = dataatual.getFullYear();
        return [dia, mes, ano].join('/');
    }
    ngOnInit() {
        this.createDB();
    }
};
TotalcategoriaPage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
TotalcategoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-totalcategoria',
        template: __webpack_require__(/*! raw-loader!./totalcategoria.page.html */ "./node_modules/raw-loader/index.js!./src/app/totalcategoria/totalcategoria.page.html"),
        styles: [__webpack_require__(/*! ./totalcategoria.page.scss */ "./src/app/totalcategoria/totalcategoria.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], TotalcategoriaPage);



/***/ })

}]);
//# sourceMappingURL=totalcategoria-totalcategoria-module-es2015.js.map