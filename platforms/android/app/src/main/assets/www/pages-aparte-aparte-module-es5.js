(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aparte-aparte-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/aparte/aparte.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/aparte/aparte.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Cadastro de Apartes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <ion-card>\n    <ion-input hidden [(ngModel)]=\"id\"></ion-input>\n  \n<ion-item>\n    <ion-label position=\"floating\">Tipo Manejo </ion-label>\n    <ion-select name=\"idtipomanejo\"  [(ngModel)]=\"id_tipomanejo\"  okText=\"Ok\" cancelText=\"Voltar\">\n     <ion-select-option *ngFor=\"let tipomanejo of tipomanejos\" value={{tipomanejo.id}}>{{tipomanejo.nome}}</ion-select-option>\n    </ion-select> \n  </ion-item>\n<ion-item>\n<ion-label position=\"floating\">Nome Aparte</ion-label>\n<ion-input [(ngModel)]=\"nome\"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">Peso inicial</ion-label>\n    <ion-input [(ngModel)]=\"pesoinicial\"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">Peso final</ion-label>\n    <ion-input [(ngModel)]=\"pesofinal\"></ion-input>\n</ion-item>\n</ion-card>\n<ion-card>\n<ion-button expand=\"full\" (click)=\"save()\"> Salvar </ion-button>\n<ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar </ion-button>\n</ion-card>\n<ion-list>\n\n<ion-list-header>\n   <ion-label> \n        Listagem\n   </ion-label>\n</ion-list-header>\n<ion-card>\n<ion-item-sliding *ngFor=\"let item of row_data\">\n <ion-item>\n     <ion-label text-wrap>\n         <h3> Tipo Manejo  : {{ item.nometipomanejo }}</h3>\n         <h3> Nome Aparte  : {{ item.nome }}</h3>\n         <h3> Peso Inicial : > = {{ item.pesoinicial }} </h3>\n         <h3> Peso Final   : < = {{ item.pesofinal }}</h3>\n          \n     </ion-label>\n </ion-item>    \n <ion-item-options side=\"end\">\n      <ion-item-option color=\"secondary\" (click)=\"update(item)\">Alterar</ion-item-option>\n      <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n </ion-item-options>\n</ion-item-sliding>\n</ion-card>\n</ion-list>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aparte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aparte.page */ "./src/app/pages/aparte/aparte.page.ts");







var routes = [
    {
        path: '',
        component: _aparte_page__WEBPACK_IMPORTED_MODULE_6__["ApartePage"]
    }
];
var ApartePageModule = /** @class */ (function () {
    function ApartePageModule() {
    }
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
    return ApartePageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");



var ApartePage = /** @class */ (function () {
    function ApartePage(sqlite) {
        this.sqlite = sqlite;
        this.id = 0;
        this.nome = "";
        this.pesoinicial = 0;
        this.pesofinal = 0;
        this.row_data = []; // Table rows
        this.tipomanejos = [];
        this.database_name = "ipedDB"; // DB name
        this.table_name = "aparte"; // Table name
    }
    ApartePage.prototype.createDB = function () {
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
    ApartePage.prototype.createTable = function () {
        var _this = this;
        this.databaseObj.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS aparte (id integer primary key AUTOINCREMENT NOT NULL, id_tipomanejo integer NOT NULL, nome TEXT NOT NULL, pesoinicial integer NOT NULL, pesofinal integer NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS tipomanejo (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL)'],
        ])
            .then(function () {
            _this.getAll();
            _this.getTipoManejo();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    ApartePage.prototype.save = function () {
        var _this = this;
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
        if (this.id != 0) {
            this.databaseObj.executeSql('UPDATE ' + this.table_name + ' set nome=?,id_tipomanejo=?,pesoinicial=?,pesofinal=? where id=?', [this.nome, this.id_tipomanejo, this.pesoinicial, this.pesofinal])
                .then(function () {
                alert('Aparte Atualizado !');
                _this.nome = "";
                _this.id_tipomanejo = 0;
                _this.pesoinicial = 0;
                _this.pesofinal = 0;
                _this.getAll();
            })
                .catch(function (e) {
                alert("error " + JSON.stringify(e));
            });
        }
        else {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,id_tipomanejo,pesoinicial,pesofinal) VALUES (?,?,?,?)', [this.nome, this.id_tipomanejo, this.pesoinicial, this.pesofinal])
                .then(function () {
                alert('Aparte Inserido !');
                _this.nome = "";
                _this.id_tipomanejo = 0;
                _this.pesoinicial = 0;
                _this.pesofinal = 0;
                _this.getAll();
            })
                .catch(function (e) {
                alert("error " + JSON.stringify(e));
            });
        }
    };
    ApartePage.prototype.getAll = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT aparte.id,aparte.nome,aparte.pesoinicial,aparte.pesofinal,tipomanejo.nome as nometipomanejo FROM aparte, tipomanejo where aparte.id_tipomanejo=tipomanejo.id", [])
            .then(function (res) {
            _this.row_data = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.row_data.push(res.rows.item(i));
                }
            }
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    ApartePage.prototype.getTipoManejo = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM tipomanejo ", [])
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
    ApartePage.prototype.delete = function (item) {
        var _this = this;
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE id = " + item.id, [])
            .then(function (res) {
            alert("Aparte removido !");
            _this.getAll();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    ApartePage.prototype.update = function (item) {
        this.id = item.id;
        this.nome = item.nome;
        this.id_tipomanejo = item.id_tipomanejo;
        this.pesoinicial = item.pesoinicial;
        this.pesofinal = item.pesofinal;
    };
    ApartePage.prototype.clearfields = function () {
        this.id = 0;
        this.nome = "";
    };
    ApartePage.prototype.ngOnInit = function () {
        this.createDB();
    };
    ApartePage.ctorParameters = function () { return [
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
    ]; };
    ApartePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aparte',
            template: __webpack_require__(/*! raw-loader!./aparte.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/aparte/aparte.page.html"),
            styles: [__webpack_require__(/*! ./aparte.page.scss */ "./src/app/pages/aparte/aparte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
    ], ApartePage);
    return ApartePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aparte-aparte-module-es5.js.map