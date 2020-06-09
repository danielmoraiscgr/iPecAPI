(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fazenda-fazenda-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fazenda/fazenda.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fazenda/fazenda.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar> \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Cadastro de Fazendas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n<ion-input hidden [(ngModel)]=\"id\"></ion-input>\n\n<ion-item>\n    <ion-label position=\"floating\">Produtor</ion-label>  \n    <ion-select [compareWith]=\"compareWith\" [(ngModel)]=\"id_produtor\"  okText=\"Ok\" cancelText=\"Voltar\">\n     <ion-select-option *ngFor=\"let produtor of produtores\"  value={{produtor.id}} >{{produtor.nome}}</ion-select-option>\n    </ion-select> \n  </ion-item>\n\n<ion-item>\n<ion-label position=\"floating\">Fazenda</ion-label>\n<ion-input [(ngModel)]=\"nome\"></ion-input>\n</ion-item>\n  </ion-card>\n<ion-card>\n<ion-button expand=\"full\" (click)=\"save()\"> Salvar </ion-button>\n<ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar </ion-button>\n</ion-card>\n<ion-list>\n\n<ion-list-header>\n   <ion-label> \n        Listagem\n   </ion-label>\n</ion-list-header>\n<ion-card>\n  <ion-item-sliding *ngFor=\"let item of row_data\">\n <ion-item>\n     <ion-label text-wrap>\n         <h3> Produtor : {{ item.nomeprodutor }}</h3>\n         <h3> Fazenda  : {{ item.nome }}</h3>\n           <!-- <ion-text color=\"secondary\">\n             <p> Fazenda : {{ item.nome }}</p>\n           </ion-text> -->\n     </ion-label>\n </ion-item>    \n <ion-item-options side=\"end\">\n      <ion-item-option color=\"secondary\" (click)=\"update(item)\">Alterar</ion-item-option>\n      <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n </ion-item-options>\n</ion-item-sliding>\n</ion-card>\n</ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/fazenda/fazenda.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/fazenda/fazenda.module.ts ***!
  \*************************************************/
/*! exports provided: FazendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FazendaPageModule", function() { return FazendaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fazenda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fazenda.page */ "./src/app/pages/fazenda/fazenda.page.ts");







var routes = [
    {
        path: '',
        component: _fazenda_page__WEBPACK_IMPORTED_MODULE_6__["FazendaPage"]
    }
];
var FazendaPageModule = /** @class */ (function () {
    function FazendaPageModule() {
    }
    FazendaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fazenda_page__WEBPACK_IMPORTED_MODULE_6__["FazendaPage"]]
        })
    ], FazendaPageModule);
    return FazendaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fazenda/fazenda.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/fazenda/fazenda.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhemVuZGEvZmF6ZW5kYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/fazenda/fazenda.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/fazenda/fazenda.page.ts ***!
  \***********************************************/
/*! exports provided: FazendaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FazendaPage", function() { return FazendaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");



var FazendaPage = /** @class */ (function () {
    function FazendaPage(sqlite) {
        this.sqlite = sqlite;
        this.id = 0;
        this.nome = "";
        this.row_data = []; // Table rows
        this.produtores = [];
        this.database_name = "ipedDB"; // DB name
        this.table_name = "fazenda"; // Table name
    }
    FazendaPage.prototype.createDB = function () {
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
    FazendaPage.prototype.createTable = function () {
        var _this = this;
        this.databaseObj.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS produtor (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, email TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS fazenda (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, id_produtor integer)'],
        ])
            .then(function () {
            _this.getAll();
            _this.getProdutores();
        })
            .catch(function (e) {
            alert(' Erro ao criar banco de dados ');
            // alert("error " + JSON.stringify(e))
        });
    };
    FazendaPage.prototype.clearfields = function () {
        this.id = 0;
        this.id_produtor = 0;
        this.nome = "";
    };
    FazendaPage.prototype.save = function () {
        var _this = this;
        if (this.id_produtor == null) {
            alert("Entre com o Produtor !");
            return;
        }
        if (!this.nome.length) {
            alert("Entre com o nome da Fazenda !");
            return;
        }
        if (this.id != 0) {
            this.databaseObj.executeSql('UPDATE ' + this.table_name + ' set nome=?,id_produtor=? where id=?', [this.nome, this.id_produtor, this.id])
                .then(function () {
                alert('Fazenda Atualizado !');
                _this.id = 0;
                _this.id_produtor = 0;
                _this.nome = "";
                _this.getAll();
            })
                .catch(function (e) {
                alert("error " + JSON.stringify(e));
            });
        }
        else {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,id_produtor) VALUES (?,?)', [this.nome, this.id_produtor])
                .then(function () {
                alert('Fazenda Inserida !');
                _this.nome = "";
                _this.id_produtor = 0;
                _this.getAll();
            })
                .catch(function (e) {
                alert("error " + JSON.stringify(e));
            });
        }
    };
    FazendaPage.prototype.getAll = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT fazenda.id,fazenda.nome,fazenda.id_produtor,produtor.nome as nomeprodutor from fazenda , produtor where fazenda.id_produtor=produtor.id", [])
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
    FazendaPage.prototype.getProdutores = function () {
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
        var compareWithFn = function (o1, o2) {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = compareWithFn;
    };
    FazendaPage.prototype.delete = function (item) {
        var _this = this;
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE id = " + item.id, [])
            .then(function (res) {
            alert("Fazenda removida !");
            _this.getAll();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    FazendaPage.prototype.update = function (item) {
        this.id = item.id;
        this.id_produtor = item.id_produtor;
        this.nome = item.nome;
    };
    // (ngModelChange)="produtorFormSelected($event)" 
    FazendaPage.prototype.produtorFormSelected = function (newform) {
        var selectedForm = this.produtores.find(function (f) {
            return f.id === newform;
        });
        this.id_produtor = selectedForm;
    };
    FazendaPage.prototype.ngOnInit = function () {
        this.createDB();
    };
    FazendaPage.ctorParameters = function () { return [
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
    ]; };
    FazendaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fazenda',
            template: __webpack_require__(/*! raw-loader!./fazenda.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fazenda/fazenda.page.html"),
            styles: [__webpack_require__(/*! ./fazenda.page.scss */ "./src/app/pages/fazenda/fazenda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
    ], FazendaPage);
    return FazendaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fazenda-fazenda-module-es5.js.map