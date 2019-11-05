(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-produtor-produtor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/produtor/produtor.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/produtor/produtor.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Produtor Rural</ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- <ion-button expand=\"full\" (click)=\"createDB()\"> Criar Banco de Dados</ion-button> -->\n<ion-content>\n  \n  <ion-item>\n       <ion-label position=\"fixed\">Nome : </ion-label>\n       <ion-input [(ngModel)]=\"nome\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"fixed\">E-mail : </ion-label>\n    <ion-input [(ngModel)]=\"email\"></ion-input>\n</ion-item>\n\n<ion-button expand=\"full\" (click)=\"add()\"> Salvar </ion-button>\n\n<ion-list>\n\n    <ion-list-header>\n        <ion-label> \n             Listagem\n        </ion-label>\n    </ion-list-header>\n  \n    <ion-item-sliding *ngFor=\"let item of row_data\">\n      <ion-item>\n          <ion-label text-wrap>\n              <h3> Produtor : {{item.id}}-{{ item.nome }}</h3>\n                <ion-text color=\"secondary\">\n                  <p> E-mail : {{ item.email }}</p>\n                </ion-text>\n          </ion-label>\n      </ion-item>    \n      <ion-item-options side=\"end\">\n           <ion-item-option color=\"secondary\" (click)=\"update(item)\">Altera</ion-item-option>\n           <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n      </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/produtor/produtor.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/produtor/produtor.module.ts ***!
  \***************************************************/
/*! exports provided: ProdutorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutorPageModule", function() { return ProdutorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _produtor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produtor.page */ "./src/app/pages/produtor/produtor.page.ts");







const routes = [
    {
        path: '',
        component: _produtor_page__WEBPACK_IMPORTED_MODULE_6__["ProdutorPage"]
    }
];
let ProdutorPageModule = class ProdutorPageModule {
};
ProdutorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_produtor_page__WEBPACK_IMPORTED_MODULE_6__["ProdutorPage"]]
    })
], ProdutorPageModule);



/***/ }),

/***/ "./src/app/pages/produtor/produtor.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/produtor/produtor.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1dG9yL3Byb2R1dG9yLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/produtor/produtor.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/produtor/produtor.page.ts ***!
  \*************************************************/
/*! exports provided: ProdutorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutorPage", function() { return ProdutorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");



let ProdutorPage = class ProdutorPage {
    constructor(sqlite) {
        this.sqlite = sqlite;
        this.nome = "";
        this.email = "";
        this.name_model = ""; // Input field model
        this.row_data = []; // Table rows
        this.database_name = "ipedDB"; // DB name
        this.table_name = "produtor"; // Table name
    }
    createDB() {
        this.sqlite.create({
            name: this.database_name,
            location: 'default'
        })
            .then((db) => {
            this.databaseObj = db;
            //alert('Banco de dados Criado !');
            this.createTable();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    createTable() {
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (id INTEGER PRIMARY KEY, nome varchar(255) not null, email varchar(255) not null)', [])
            .then(() => {
            //alert('Tabela Produtor criada !');
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    add() {
        if (!this.nome.length) {
            alert("Entre com o nome !");
            return;
        }
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,email) VALUES ("' + this.nome + '","' + this.email + '")', [])
            .then(() => {
            alert('Produtor Inserido !');
            this.nome = "";
            this.email = "";
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
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
            alert("Produtor removido !");
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    update() {
    }
    /*async showToast(msg){
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
        });
        toast.present();
    }
    */
    ngOnInit() {
        this.createDB();
        //this.getAll(); 
    }
};
ProdutorPage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
];
ProdutorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produtor',
        template: __webpack_require__(/*! raw-loader!./produtor.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/produtor/produtor.page.html"),
        styles: [__webpack_require__(/*! ./produtor.page.scss */ "./src/app/pages/produtor/produtor.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
], ProdutorPage);



/***/ })

}]);
//# sourceMappingURL=pages-produtor-produtor-module-es2015.js.map