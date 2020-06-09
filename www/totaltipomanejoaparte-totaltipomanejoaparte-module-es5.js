(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["totaltipomanejoaparte-totaltipomanejoaparte-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/totaltipomanejoaparte/totaltipomanejoaparte.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/totaltipomanejoaparte/totaltipomanejoaparte.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar> \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Calc por Tipo de Manejo e Aparte</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- \n    <ion-item>\n        <ion-label position=\"floating\">Data Inicial</ion-label>\n        <ion-datetime displayformat=\"dd/MM/yyyy\" name=\"datainicial_manejo\" min=\"2019\" max=\"2030-01-01\" [(ngModel)]=\"datainicial\"></ion-datetime>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label position=\"floating\">Data Final</ion-label>\n        <ion-datetime displayformat=\"dd/MM/yyyy\" name=\"datafinal_manejo\" min=\"2019\" max=\"2030-01-01\" [(ngModel)]=\"datafinal\"></ion-datetime>\n      </ion-item> -->\n<ion-card>\n      <ion-item>\n          <ion-label position=\"floating\">Tipo Manejo</ion-label>\n          <ion-select name=\"idtipomanejo\"  [(ngModel)]=\"id_tipomanejo\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let tipomanejo of tipomanejos\" value={{tipomanejo.id}}>{{tipomanejo.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n    \n      <ion-item>\n          <ion-label position=\"floating\">Produtor</ion-label>\n          <ion-select (blur)=\"onBlur(getFazendas(id_produtor))\" name=\"idprodutor\"  [(ngModel)]=\"id_produtor\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let produtor of produtores\" value={{produtor.id}}>{{produtor.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n    \n        <ion-item>\n            <ion-label position=\"floating\">Fazenda</ion-label>\n            <ion-select name=\"idfazenda\"  [(ngModel)]=\"id_fazenda\" okText=\"Ok\" cancelText=\"Voltar\">\n             <ion-select-option *ngFor=\"let fazenda of fazendas\" value={{fazenda.id}}>{{fazenda.nome}}</ion-select-option>\n            </ion-select> \n          </ion-item>\n</ion-card>\n<ion-card>\n          <ion-button expand=\"full\" (click)=\"totalTipomanejoAparte()\"> Executar Calculo  </ion-button>\n          <ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar campos  </ion-button>\n</ion-card>\n<ion-card>\n          <ion-item-sliding *ngFor=\"let totalizacao of totaltipomanejoapartes\">\n          <ion-item>\n              <ion-label text-wrap>\n                  <h3> Tipo Manejo    : {{ totalizacao.nometipomanejo }}</h3>\n                  <h3> Aparte         : {{ totalizacao.nomeaparte }}</h3>                  \n                  <h3> Total          : {{ totalizacao.totalmanejo}} </h3>\n                  <h3> Média          : {{ totalizacao.mediapeso | number}} </h3>     \n          </ion-label>\n          </ion-item>    \n          </ion-item-sliding> \n</ion-card>\n</ion-content>\n<ion-footer *ngFor=\"let total of totalpeso\">\n  <ion-toolbar>\n    <ion-title>Total : {{total.totalmanejo}}  Média(kg) :  {{total.mediapeso  | number }} </ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/totaltipomanejoaparte/totaltipomanejoaparte.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/totaltipomanejoaparte/totaltipomanejoaparte.module.ts ***!
  \***********************************************************************/
/*! exports provided: TotaltipomanejoapartePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotaltipomanejoapartePageModule", function() { return TotaltipomanejoapartePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _totaltipomanejoaparte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./totaltipomanejoaparte.page */ "./src/app/totaltipomanejoaparte/totaltipomanejoaparte.page.ts");







var routes = [
    {
        path: '',
        component: _totaltipomanejoaparte_page__WEBPACK_IMPORTED_MODULE_6__["TotaltipomanejoapartePage"]
    }
];
var TotaltipomanejoapartePageModule = /** @class */ (function () {
    function TotaltipomanejoapartePageModule() {
    }
    TotaltipomanejoapartePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_totaltipomanejoaparte_page__WEBPACK_IMPORTED_MODULE_6__["TotaltipomanejoapartePage"]]
        })
    ], TotaltipomanejoapartePageModule);
    return TotaltipomanejoapartePageModule;
}());



/***/ }),

/***/ "./src/app/totaltipomanejoaparte/totaltipomanejoaparte.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/totaltipomanejoaparte/totaltipomanejoaparte.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvdGFsdGlwb21hbmVqb2FwYXJ0ZS90b3RhbHRpcG9tYW5lam9hcGFydGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/totaltipomanejoaparte/totaltipomanejoaparte.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/totaltipomanejoaparte/totaltipomanejoaparte.page.ts ***!
  \*********************************************************************/
/*! exports provided: TotaltipomanejoapartePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotaltipomanejoapartePage", function() { return TotaltipomanejoapartePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var TotaltipomanejoapartePage = /** @class */ (function () {
    function TotaltipomanejoapartePage(sqlite, toastCtrl) {
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.database_name = "ipedDB"; // DB name
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalpeso = [];
        this.row_data = [];
        this.totaltipomanejoapartes = [];
        this.tipomanejos = [];
        this.produtores = [];
        this.fazendas = [];
    }
    TotaltipomanejoapartePage.prototype.createDB = function () {
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
    TotaltipomanejoapartePage.prototype.createTable = function () {
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
    TotaltipomanejoapartePage.prototype.totalTipomanejoAparte = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT manejo.id_tipomanejo,tipomanejo.nome as nometipomanejo,manejo.id_aparte,aparte.nome as nomeaparte,count(*) as totalmanejo,avg(manejo.peso) as mediapeso from manejo,tipomanejo,aparte where manejo.id_tipomanejo=? and manejo.id_produtor=? and manejo.id_fazenda=? and manejo.id_tipomanejo=tipomanejo.id and manejo.id_aparte=aparte.id  group by manejo.id_tipomanejo,tipomanejo.nome,manejo.id_aparte,aparte.nome", [this.id_tipomanejo, this.id_produtor, this.id_fazenda])
            .then(function (res) {
            _this.totaltipomanejoapartes = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.totaltipomanejoapartes.push(res.rows.item(i));
                }
            }
            _this.totalmediapeso();
            var toast = _this.toastCtrl.create({
                message: 'Calculo realizado ! ',
                duration: 3000,
                position: 'top'
            });
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    TotaltipomanejoapartePage.prototype.totalmediapeso = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT count(*) as totalmanejo,avg(manejo.peso) as mediapeso from manejo where manejo.id_tipomanejo=? and manejo.id_produtor=? and manejo.id_fazenda=?", [this.id_tipomanejo, this.id_produtor, this.id_fazenda])
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
    TotaltipomanejoapartePage.prototype.getTipoManejos = function () {
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
    TotaltipomanejoapartePage.prototype.getProdutores = function () {
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
    TotaltipomanejoapartePage.prototype.getFazendas = function (id_produtor) {
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
    TotaltipomanejoapartePage.prototype.clearfields = function () {
        this.datainicial = null;
        this.datafinal = null;
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalpeso = [];
        this.totaltipomanejoapartes = [];
    };
    TotaltipomanejoapartePage.prototype.diaAtual = function () {
        //let datamanejo=this.datepipe.transform(this.data, 'MM/dd/yyyy');
        console.log(this.dataHoje());
    };
    TotaltipomanejoapartePage.prototype.dataHoje = function () {
        var dataatual = new Date();
        var dia = dataatual.getDate();
        var mes = dataatual.getMonth() + 1;
        var ano = dataatual.getFullYear();
        return [dia, mes, ano].join('/');
    };
    TotaltipomanejoapartePage.prototype.ngOnInit = function () {
        this.createDB();
    };
    TotaltipomanejoapartePage.ctorParameters = function () { return [
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    TotaltipomanejoapartePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-totaltipomanejoaparte',
            template: __webpack_require__(/*! raw-loader!./totaltipomanejoaparte.page.html */ "./node_modules/raw-loader/index.js!./src/app/totaltipomanejoaparte/totaltipomanejoaparte.page.html"),
            styles: [__webpack_require__(/*! ./totaltipomanejoaparte.page.scss */ "./src/app/totaltipomanejoaparte/totaltipomanejoaparte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], TotaltipomanejoapartePage);
    return TotaltipomanejoapartePage;
}());



/***/ })

}]);
//# sourceMappingURL=totaltipomanejoaparte-totaltipomanejoaparte-module-es5.js.map