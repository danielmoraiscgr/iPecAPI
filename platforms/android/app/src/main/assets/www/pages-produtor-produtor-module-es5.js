(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-produtor-produtor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/produtor/produtor.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/produtor/produtor.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Produtor Rural</ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- <ion-button expand=\"full\" (click)=\"createDB()\"> Criar Banco de Dados</ion-button> -->\n<ion-content>\n<ion-card>\n  <ion-input hidden [(ngModel)]=\"id\"></ion-input>\n\n  <ion-item>\n       <ion-label position=\"floating\">Nome</ion-label>\n       <ion-input [(ngModel)]=\"nome\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">E-mail</ion-label>\n    <ion-input [(ngModel)]=\"email\"></ion-input>\n</ion-item>\n</ion-card>\n<ion-card>\n  <ion-button expand=\"full\" (click)=\"save()\"> Salvar </ion-button>\n<ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar </ion-button>\n</ion-card>\n<ion-list>  \n   <ion-card-header>\n     <ion-card-title> Listagem </ion-card-title>\n   </ion-card-header>\n   <ion-card>   \n    <ion-item-sliding *ngFor=\"let item of row_data\">\n      <ion-item>\n          <ion-label text-wrap>\n              <h3> Produtor : {{item.id}}-{{ item.nome }}</h3>\n                <ion-text color=\"secondary\">\n                  <p> E-mail : {{ item.email }}</p>\n                </ion-text>\n          </ion-label>\n      </ion-item>    \n      <ion-item-options side=\"end\">\n           <ion-item-option color=\"secondary\" (click)=\"update(item)\">Alterar</ion-item-option>\n           <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-card>\n</ion-list>\n\n<!-- <ion-fab bottom right>\n  <button ion-fab color=\"secondary\" class=\"fabAddBtn\"><ion-icon \n  name=\"add\"></ion-icon></button>\n  </ion-fab>   -->\n\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _produtor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produtor.page */ "./src/app/pages/produtor/produtor.page.ts");







var routes = [
    {
        path: '',
        component: _produtor_page__WEBPACK_IMPORTED_MODULE_6__["ProdutorPage"]
    }
];
var ProdutorPageModule = /** @class */ (function () {
    function ProdutorPageModule() {
    }
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
    return ProdutorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/produtor/produtor.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/produtor/produtor.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabAddBtn {\n  color: var(--ion-color-primary);\n  right: 10px;\n  margin: 150px;\n  background: var(--ion-color-primary);\n  height: 70px;\n  width: 70px;\n  font-size: 50px;\n  line-height: 16px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-radius: 30px;\n  color: #fff;\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxib3JnZXMvRG9jdW1lbnRzL2lvbmljL2lQZWN1YXJpby9zcmMvYXBwL3BhZ2VzL3Byb2R1dG9yL3Byb2R1dG9yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHV0b3IvcHJvZHV0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFRQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlFQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdXRvci9wcm9kdXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiQWRkQnRuIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC8vIGZvbnQtc2l6ZTogMzBweDtcbiAgICAvLyBtYXJnaW46IDhweDtcbiAgICAvLyB3aWR0aDogNDBweDtcbiAgICAvLyBoZWlnaHQ6IDQwcHg7XG4gICAgLy8gbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgLy9cbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICBtYXJnaW46IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9IiwiLmZhYkFkZEJ0biB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHJpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");



var ProdutorPage = /** @class */ (function () {
    function ProdutorPage(sqlite) {
        this.sqlite = sqlite;
        this.id = 0;
        this.nome = "";
        this.email = "";
        this.name_model = ""; // Input field model
        this.row_data = []; // Table rows
        this.database_name = "ipedDB"; // DB name
        this.table_name = "produtor"; // Table name
    }
    ProdutorPage.prototype.createDB = function () {
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
    ProdutorPage.prototype.createTable = function () {
        var _this = this;
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (id INTEGER PRIMARY KEY, nome varchar(255) not null, email varchar(255) not null)', [])
            .then(function () {
            _this.getAll();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    ProdutorPage.prototype.save = function () {
        var _this = this;
        if (!this.nome.length) {
            alert("Entre com o nome !");
            return;
        }
        if (this.id != 0) {
            this.databaseObj.executeSql('UPDATE ' + this.table_name + ' set nome=?,email=? where id=?', [this.nome, this.email, this.id])
                .then(function () {
                alert('Produtor Atualizado !');
                _this.id = 0;
                _this.nome = "";
                _this.email = "";
                _this.getAll();
            })
                .catch(function (e) {
                alert("error " + JSON.stringify(e));
            });
        }
        else {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nome,email) VALUES (?,?)', [this.nome, this.email])
                .then(function () {
                alert('Produtor Inserido !');
                _this.nome = "";
                _this.email = "";
                _this.getAll();
            })
                .catch(function (e) {
                alert("error " + JSON.stringify(e));
            });
        }
    };
    ProdutorPage.prototype.clearfields = function () {
        this.id = 0;
        this.email = "";
        this.nome = "";
    };
    ProdutorPage.prototype.getAll = function () {
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
    ProdutorPage.prototype.delete = function (item) {
        var _this = this;
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE id = " + item.id, [])
            .then(function (res) {
            alert("Produtor removido !");
            _this.getAll();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    ProdutorPage.prototype.update = function (item) {
        this.id = item.id;
        this.email = item.email;
        this.nome = item.nome;
    };
    ProdutorPage.prototype.ngOnInit = function () {
        this.createDB();
    };
    ProdutorPage.ctorParameters = function () { return [
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
    ]; };
    ProdutorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produtor',
            template: __webpack_require__(/*! raw-loader!./produtor.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/produtor/produtor.page.html"),
            styles: [__webpack_require__(/*! ./produtor.page.scss */ "./src/app/pages/produtor/produtor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
    ], ProdutorPage);
    return ProdutorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-produtor-produtor-module-es5.js.map