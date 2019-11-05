(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categoria-categoria-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/categoria/categoria.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/categoria/categoria.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Categoria</ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- <ion-button expand=\"full\" (click)=\"createDB()\"> Criar Banco de Dados</ion-button> -->\n<ion-content>\n  \n  <ion-item>\n       <ion-label position=\"fixed\">Nome : </ion-label>\n       <ion-input [(ngModel)]=\"nome\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Sexo : </ion-label>\n      <ion-select name=\"sexo\"  [(ngModel)]=\"sexo\" okText=\"Ok\" cancelText=\"Voltar\">\n       <ion-select-option  value=\"Macho\">Macho</ion-select-option>\n       <ion-select-option  value=\"Fêmea\">Fêmea</ion-select-option>\n       </ion-select> \n    </ion-item>\n\n  <!-- <ion-list radio-group [(ngModel)]=\"sexo\">\n      <ion-item>\n        <ion-label>Macho</ion-label>\n        <ion-radio value=\"Macho\" checked></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Femea</ion-label>\n        <ion-radio value=\"Femea\"></ion-radio>\n      </ion-item>\n    </ion-list> -->\n\n\n<ion-button expand=\"full\" (click)=\"add()\"> Salvar </ion-button>\n\n<ion-list>\n\n    <ion-list-header>\n        <ion-label> \n             Listagem\n        </ion-label>\n    </ion-list-header>\n  \n    <ion-item-sliding *ngFor=\"let item of row_data\">\n      <ion-item>\n          <ion-label text-wrap>\n              <h3> Categoria : {{ item.nome }}</h3>\n              <h3> Sexo : {{ item.sexo }}</h3>              \n          </ion-label>\n      </ion-item>    \n      <ion-item-options side=\"end\">\n           <ion-item-option color=\"secondary\" (click)=\"update(item)\">Altera</ion-item-option>\n           <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n      </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/categoria/categoria.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/categoria/categoria.module.ts ***!
  \*****************************************************/
/*! exports provided: CategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPageModule", function() { return CategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria.page */ "./src/app/pages/categoria/categoria.page.ts");







var routes = [
    {
        path: '',
        component: _categoria_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaPage"]
    }
];
var CategoriaPageModule = /** @class */ (function () {
    function CategoriaPageModule() {
    }
    CategoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_categoria_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaPage"]]
        })
    ], CategoriaPageModule);
    return CategoriaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/categoria/categoria.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/categoria/categoria.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYS9jYXRlZ29yaWEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/categoria/categoria.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/categoria/categoria.page.ts ***!
  \***************************************************/
/*! exports provided: CategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPage", function() { return CategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");



var CategoriaPage = /** @class */ (function () {
    function CategoriaPage(sqlite) {
        this.sqlite = sqlite;
        this.nome = "";
        this.sexo = "";
        this.row_data = []; // Table rows
        this.database_name = "ipedDB"; // DB name
        this.table_name = "categoria"; // Table name
    }
    CategoriaPage.prototype.createDB = function () {
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
    CategoriaPage.prototype.createTable = function () {
        var _this = this;
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS categoria (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, sexo TEXT NOT NULL)', [])
            .then(function () {
            _this.getAll();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    CategoriaPage.prototype.add = function () {
        var _this = this;
        if (!this.nome.length) {
            alert("Entre com o nome da Categoria !");
            return;
        }
        if (!this.sexo.length) {
            alert("Entre com o sexo da Categoria !");
            return;
        }
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,sexo) VALUES (?,?)', [this.nome, this.sexo])
            .then(function () {
            alert('Categoria Inserida !');
            _this.nome = "";
            _this.sexo = "";
            _this.getAll();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    CategoriaPage.prototype.getAll = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
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
    CategoriaPage.prototype.delete = function (item) {
        var _this = this;
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE id = " + item.id, [])
            .then(function (res) {
            alert("Categoria removida !");
            _this.getAll();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    CategoriaPage.prototype.update = function () {
    };
    /*async showToast(msg){
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
        });
        toast.present();
    }
    */
    CategoriaPage.prototype.ngOnInit = function () {
        this.createDB();
    };
    CategoriaPage.ctorParameters = function () { return [
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
    ]; };
    CategoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categoria',
            template: __webpack_require__(/*! raw-loader!./categoria.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/categoria/categoria.page.html"),
            styles: [__webpack_require__(/*! ./categoria.page.scss */ "./src/app/pages/categoria/categoria.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
    ], CategoriaPage);
    return CategoriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-categoria-categoria-module-es5.js.map