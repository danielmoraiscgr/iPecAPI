(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categoria-categoria-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/categoria/categoria.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/categoria/categoria.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Categoria</ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- <ion-button expand=\"full\" (click)=\"createDB()\"> Criar Banco de Dados</ion-button> -->\n<ion-content>\n <ion-card> \n<ion-input hidden readonly=\"true\" [(ngModel)]=\"id\"></ion-input>\n<ion-item>\n  <ion-label position=\"floating\">Id</ion-label>\n  <ion-input [(ngModel)]=\"id\"></ion-input>\n</ion-item>\n\n  <ion-item>\n       <ion-label position=\"floating\">Nome</ion-label>\n       <ion-input [(ngModel)]=\"nome\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">Sexo</ion-label>\n      <ion-select name=\"sexo\"  [(ngModel)]=\"sexo\" okText=\"Ok\" cancelText=\"Voltar\">\n       <ion-select-option  value=\"Macho\">Macho</ion-select-option>\n       <ion-select-option  value=\"Fêmea\">Fêmea</ion-select-option>\n       </ion-select> \n    </ion-item>\n </ion-card>\n <ion-card><\n<ion-button expand=\"full\" (click)=\"save()\"> Salvar </ion-button>\n<ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar </ion-button>\n </ion-card>\n\n <ion-list>\n    <ion-list-header>\n        <ion-label> \n             Listagem\n        </ion-label>\n    </ion-list-header>\n  <ion-card>\n    <ion-item-sliding *ngFor=\"let item of row_data\">\n      <ion-item>\n          <ion-label text-wrap>\n              <h3> Categoria : {{ item.nome }}</h3>\n              <h3> Sexo : {{ item.sexo }}</h3>              \n          </ion-label>\n      </ion-item>    \n      <ion-item-options side=\"end\">\n           <ion-item-option color=\"secondary\" (click)=\"update(item)\">Alterar</ion-item-option>\n           <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-card>\n</ion-list>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria.page */ "./src/app/pages/categoria/categoria.page.ts");







const routes = [
    {
        path: '',
        component: _categoria_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaPage"]
    }
];
let CategoriaPageModule = class CategoriaPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");



let CategoriaPage = class CategoriaPage {
    constructor(sqlite) {
        this.sqlite = sqlite;
        this.id = 0;
        this.nome = "";
        this.sexo = "";
        this.row_data = []; // Table rows
        this.database_name = "ipedDB"; // DB name
        this.table_name = "categoria"; // Table name
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
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS categoria (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, sexo TEXT NOT NULL)', [])
            .then(() => {
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    save() {
        if (!this.nome.length) {
            alert("Entre com o nome da Categoria !");
            return;
        }
        if (!this.sexo.length) {
            alert("Entre com o sexo da Categoria !");
            return;
        }
        if (this.id != 0) {
            this.databaseObj.executeSql('UPDATE ' + this.table_name + ' set nome=?,sexo=? where id=?', [this.nome, this.sexo, this.id])
                .then(() => {
                alert('Categoria Atualizada !');
                this.id = 0;
                this.nome = "";
                this.sexo = "";
                this.getAll();
            })
                .catch(e => {
                alert("error " + JSON.stringify(e));
            });
        }
        else {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,sexo) VALUES (?,?)', [this.nome, this.sexo])
                .then(() => {
                alert('Categoria Inserida !');
                this.id = 0;
                this.nome = "";
                this.sexo = "";
                this.getAll();
            })
                .catch(e => {
                alert("error " + JSON.stringify(e));
            });
        }
    }
    getAll() {
        this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
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
    delete(item) {
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE id = " + item.id, [])
            .then((res) => {
            alert("Categoria removida !");
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    update(item) {
        this.id = item.id;
        this.nome = item.nome;
        this.sexo = item.sexo;
    }
    clearfields() {
        this.id = 0;
        this.nome = "";
        this.sexo = "";
    }
    ngOnInit() {
        this.createDB();
    }
};
CategoriaPage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
];
CategoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categoria',
        template: __webpack_require__(/*! raw-loader!./categoria.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/categoria/categoria.page.html"),
        styles: [__webpack_require__(/*! ./categoria.page.scss */ "./src/app/pages/categoria/categoria.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
], CategoriaPage);



/***/ })

}]);
//# sourceMappingURL=pages-categoria-categoria-module-es2015.js.map