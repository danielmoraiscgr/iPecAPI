(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-totalizacao-totalizacao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/totalizacao/totalizacao.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/totalizacao/totalizacao.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar> \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Calc por Data de Manejo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item>\n        <ion-label position=\"floating\">Data Inicial</ion-label>\n        <ion-datetime displayformat=\"dd/MM/yyyy\" name=\"datainicial_manejo\" min=\"2019\" max=\"2030-01-01\" [(ngModel)]=\"datainicial\"></ion-datetime>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label position=\"floating\">Data Final</ion-label>\n        <ion-datetime displayformat=\"dd/MM/yyyy\" name=\"datafinal_manejo\" min=\"2019\" max=\"2030-01-01\" [(ngModel)]=\"datafinal\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Tipo Manejo</ion-label>\n          <ion-select name=\"idtipomanejo\"  [(ngModel)]=\"id_tipomanejo\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let tipomanejo of tipomanejos\" value={{tipomanejo.id}}>{{tipomanejo.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n    \n      <ion-item>\n          <ion-label position=\"floating\">Produtor</ion-label>\n          <ion-select (blur)=\"onBlur(getFazendas(id_produtor))\" name=\"idprodutor\"  [(ngModel)]=\"id_produtor\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let produtor of produtores\" value={{produtor.id}}>{{produtor.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n    \n        <ion-item>\n            <ion-label position=\"floating\">Fazenda</ion-label>\n            <ion-select name=\"idfazenda\"  [(ngModel)]=\"id_fazenda\" okText=\"Ok\" cancelText=\"Voltar\">\n             <ion-select-option *ngFor=\"let fazenda of fazendas\" value={{fazenda.id}}>{{fazenda.nome}}</ion-select-option>\n            </ion-select> \n          </ion-item>\n\n          <ion-button expand=\"full\" (click)=\"totalManejoDia()\"> Executar Calculo  </ion-button>\n          <ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar campos  </ion-button>\n     \n\n          <ion-item-sliding *ngFor=\"let totalizacao of totalmanejo\">\n          <ion-item>\n              <ion-label text-wrap>\n                  <h3> Data           : {{ totalizacao.data | date: 'dd/MM/yyyy'  }} </h3>\n                  <h3> Tipo de Manejo : {{ totalizacao.nometipomanejo }}</h3>           \n                  <h3> Produtor       : {{ totalizacao.nomeprodutor }}</h3>\n                  <h3> Fazenda        : {{ totalizacao.nomefazenda }}</h3>\n                  <h3> Categoria      : {{ totalizacao.nomecategoria }}</h3>\n                  <h3> Raça           : {{ totalizacao.nomeraca }}</h3>\n                  <h3> Aparte         : {{ totalizacao.nomeaparte }}</h3>              \n                  <h3> Total          : {{ totalizacao.totalmanejo}} </h3>\n                  <h3> Média          : {{ totalizacao.mediapeso | number}} </h3>     \n          </ion-label>\n          </ion-item>    \n          </ion-item-sliding> \n</ion-content>\n<ion-footer *ngFor=\"let total of totalpeso\">\n  <ion-toolbar>\n    <ion-title>Total : {{total.totalmanejo}}  Média(kg) :  {{total.mediapeso  | number }} </ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/totalizacao/totalizacao.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/totalizacao/totalizacao.module.ts ***!
  \*********************************************************/
/*! exports provided: TotalizacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalizacaoPageModule", function() { return TotalizacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _totalizacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./totalizacao.page */ "./src/app/pages/totalizacao/totalizacao.page.ts");







var routes = [
    {
        path: '',
        component: _totalizacao_page__WEBPACK_IMPORTED_MODULE_6__["TotalizacaoPage"]
    }
];
var TotalizacaoPageModule = /** @class */ (function () {
    function TotalizacaoPageModule() {
    }
    TotalizacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_totalizacao_page__WEBPACK_IMPORTED_MODULE_6__["TotalizacaoPage"]]
        })
    ], TotalizacaoPageModule);
    return TotalizacaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/totalizacao/totalizacao.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/totalizacao/totalizacao.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvdGFsaXphY2FvL3RvdGFsaXphY2FvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/totalizacao/totalizacao.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/totalizacao/totalizacao.page.ts ***!
  \*******************************************************/
/*! exports provided: TotalizacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalizacaoPage", function() { return TotalizacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");



var TotalizacaoPage = /** @class */ (function () {
    function TotalizacaoPage(sqlite) {
        this.sqlite = sqlite;
        this.database_name = "ipedDB"; // DB name
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalpeso = [];
        this.row_data = [];
        this.totalmanejo = [];
        this.tipomanejos = [];
        this.produtores = [];
        this.fazendas = [];
    }
    TotalizacaoPage.prototype.createDB = function () {
        var _this = this;
        this.sqlite.create({
            name: this.database_name,
            location: 'default'
        })
            .then(function (db) {
            _this.databaseObj = db;
            _this.createTable();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    TotalizacaoPage.prototype.createTable = function () {
        var _this = this;
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
            .then(function () {
            _this.getTipoManejos();
            _this.getProdutores();
            //this.totalManejoDia();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    TotalizacaoPage.prototype.totalManejoDia = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT manejo.data,manejo.id_tipomanejo,tipomanejo.nome as nometipomanejo,manejo.id_produtor,produtor.nome as nomeprodutor,manejo.id_fazenda,fazenda.nome as nomefazenda,manejo.id_categoria,categoria.nome as nomecategoria,manejo.id_raca,raca.nome as nomeraca,manejo.id_aparte,aparte.nome as nomeaparte,count(*) as totalmanejo,avg(manejo.peso) as mediapeso from manejo , produtor, tipomanejo, fazenda, categoria, raca, aparte where manejo.id_produtor=produtor.id and manejo.id_fazenda=fazenda.id and manejo.id_categoria=categoria.id and manejo.id_raca=raca.id and manejo.id_aparte=aparte.id and manejo.id_tipomanejo=tipomanejo.id  group by manejo.data,manejo.id_tipomanejo,tipomanejo.nome,manejo.id_produtor,produtor.nome,manejo.id_fazenda,fazenda.nome,manejo.id_categoria,categoria.nome,manejo.id_raca,raca.nome,manejo.id_aparte,aparte.nome", [])
            .then(function (res) {
            _this.totalmanejo = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.totalmanejo.push(res.rows.item(i));
                }
            }
            _this.totalmediapeso();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    TotalizacaoPage.prototype.totalmediapeso = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT count(*) as totalmanejo,avg(manejo.peso) as mediapeso from manejo ", [])
            .then(function (res) {
            _this.totalpeso = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.totalpeso.push(res.rows.item(i));
                }
            }
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    TotalizacaoPage.prototype.getTipoManejos = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM tipomanejo", [])
            .then(function (res) {
            _this.tipomanejos = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.tipomanejos.push(res.rows.item(i));
                }
            }
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    TotalizacaoPage.prototype.getProdutores = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM produtor", [])
            .then(function (res) {
            _this.produtores = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.produtores.push(res.rows.item(i));
                }
            }
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    TotalizacaoPage.prototype.getFazendas = function (id_produtor) {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM fazenda where id_produtor=?", [this.id_produtor])
            .then(function (res) {
            _this.fazendas = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.fazendas.push(res.rows.item(i));
                }
            }
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    TotalizacaoPage.prototype.clearfields = function () {
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalmanejo = [];
    };
    TotalizacaoPage.prototype.diaAtual = function () {
        //let datamanejo=this.datepipe.transform(this.data, 'MM/dd/yyyy');
        console.log(this.dataHoje());
    };
    TotalizacaoPage.prototype.dataHoje = function () {
        var dataatual = new Date();
        var dia = dataatual.getDate();
        var mes = dataatual.getMonth() + 1;
        var ano = dataatual.getFullYear();
        return [dia, mes, ano].join('/');
    };
    TotalizacaoPage.prototype.ngOnInit = function () {
        this.createDB();
    };
    TotalizacaoPage.ctorParameters = function () { return [
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
    ]; };
    TotalizacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-totalizacao',
            template: __webpack_require__(/*! raw-loader!./totalizacao.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/totalizacao/totalizacao.page.html"),
            styles: [__webpack_require__(/*! ./totalizacao.page.scss */ "./src/app/pages/totalizacao/totalizacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
    ], TotalizacaoPage);
    return TotalizacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-totalizacao-totalizacao-module-es5.js.map