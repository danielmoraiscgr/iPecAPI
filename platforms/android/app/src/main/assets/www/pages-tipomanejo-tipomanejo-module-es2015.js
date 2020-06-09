(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tipomanejo-tipomanejo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tipomanejo/tipomanejo.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tipomanejo/tipomanejo.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Tipo de Manejo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n    <ion-input hidden [(ngModel)]=\"id\"></ion-input>\n  \n    <ion-item>\n         <ion-label position=\"floating\">Nome do Manejo</ion-label>\n         <ion-input [(ngModel)]=\"nome\"></ion-input>\n    </ion-item>\n</ion-card> \n <ion-card>\n  <ion-button expand=\"full\" (click)=\"save()\"> Salvar </ion-button>\n  <ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar </ion-button>\n </ion-card>\n  <ion-list>\n  \n      <ion-list-header>\n          <ion-label> \n               Listagem\n          </ion-label>\n      </ion-list-header>\n    <ion-card>\n      <ion-item-sliding *ngFor=\"let item of row_data\">\n        <ion-item>\n            <ion-label text-wrap>\n                <h3> Nome do Manejo : {{ item.nome }}</h3>\n            </ion-label>\n        </ion-item>    \n        <ion-item-options side=\"end\">\n             <ion-item-option color=\"secondary\" (click)=\"update(item)\">Alterar</ion-item-option>\n             <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-card>\n  </ion-list>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/tipomanejo/tipomanejo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tipomanejo/tipomanejo.module.ts ***!
  \*******************************************************/
/*! exports provided: TipomanejoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipomanejoPageModule", function() { return TipomanejoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tipomanejo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tipomanejo.page */ "./src/app/pages/tipomanejo/tipomanejo.page.ts");







const routes = [
    {
        path: '',
        component: _tipomanejo_page__WEBPACK_IMPORTED_MODULE_6__["TipomanejoPage"]
    }
];
let TipomanejoPageModule = class TipomanejoPageModule {
};
TipomanejoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tipomanejo_page__WEBPACK_IMPORTED_MODULE_6__["TipomanejoPage"]]
    })
], TipomanejoPageModule);



/***/ }),

/***/ "./src/app/pages/tipomanejo/tipomanejo.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/tipomanejo/tipomanejo.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcG9tYW5lam8vdGlwb21hbmVqby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tipomanejo/tipomanejo.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tipomanejo/tipomanejo.page.ts ***!
  \*****************************************************/
/*! exports provided: TipomanejoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipomanejoPage", function() { return TipomanejoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");



let TipomanejoPage = class TipomanejoPage {
    constructor(sqlite) {
        this.sqlite = sqlite;
        this.id = 0;
        this.nome = "";
        this.row_data = []; // Table rows
        this.database_name = "ipedDB"; // DB name
        this.table_name = "tipomanejo"; // Table name
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
            ['CREATE TABLE IF NOT EXISTS tipomanejo (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL)'],
        ])
            .then(() => {
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    save() {
        if (!this.nome.length) {
            alert("Entre com o nome do Tipo de Manejo!");
            return;
        }
        if (this.id != 0) {
            this.databaseObj.executeSql('UPDATE ' + this.table_name + ' set nome=? where id=?', [this.nome, this.id])
                .then(() => {
                alert('Tipo de Manejo Atualizado !');
                this.id = 0;
                this.nome = "";
                this.getAll();
            })
                .catch(e => {
                alert("error " + JSON.stringify(e));
            });
        }
        else {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome) VALUES (?)', [this.nome])
                .then(() => {
                alert('Tipo de Manejo Inserido !');
                this.nome = "";
                this.getAll();
            })
                .catch(e => {
                alert("error " + JSON.stringify(e));
            });
        }
    }
    getAll() {
        this.databaseObj.executeSql("SELECT * from tipomanejo", [])
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
            alert("Tipo de Manejo removido !");
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    update(item) {
        this.id = item.id;
        this.nome = item.nome;
    }
    clearfields() {
        this.id = 0;
        this.nome = "";
    }
    ngOnInit() {
        this.createDB();
    }
};
TipomanejoPage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
];
TipomanejoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tipomanejo',
        template: __webpack_require__(/*! raw-loader!./tipomanejo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tipomanejo/tipomanejo.page.html"),
        styles: [__webpack_require__(/*! ./tipomanejo.page.scss */ "./src/app/pages/tipomanejo/tipomanejo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
], TipomanejoPage);



/***/ })

}]);
//# sourceMappingURL=pages-tipomanejo-tipomanejo-module-es2015.js.map