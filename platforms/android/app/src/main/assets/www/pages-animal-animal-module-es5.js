(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-animal-animal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/animal/animal.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/animal/animal.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Cadastro de Animais</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n    <ion-item>\n        <ion-label>Produtor</ion-label>\n        <ion-select name=\"idprodutor\"  [(ngModel)]=\"id_produtor\" okText=\"Ok\" cancelText=\"Voltar\">\n         <ion-select-option *ngFor=\"let produtor of produtores\" value={{produtor.id}}>{{produtor.nome}}</ion-select-option>\n        </ion-select> \n      </ion-item>\n\n      <ion-item>\n          <ion-label>Fazenda</ion-label>\n          <ion-select name=\"idfazenda\"  [(ngModel)]=\"id_fazenda\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let fazenda of fazendas\" value={{fazenda.id}}>{{fazenda.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n      \n        <ion-item>\n            <ion-label position=\"fixed\">Ident. do Animal : </ion-label>\n            <ion-input [(ngModel)]=\"identAnimal\"></ion-input>\n       </ion-item>\n     \n        <ion-item>\n            <ion-label>Categoria</ion-label>\n            <ion-select name=\"idcategoria\"  [(ngModel)]=\"id_categoria\" okText=\"Ok\" cancelText=\"Voltar\">\n             <ion-select-option *ngFor=\"let categoria of categorias\" value={{categoria.id}}>{{categoria.nome}}</ion-select-option>\n            </ion-select> \n          </ion-item>\n        \n        <ion-item>\n            <ion-label>Raça</ion-label>\n            <ion-select name=\"idraca\"  [(ngModel)]=\"id_raca\" okText=\"Ok\" cancelText=\"Voltar\">\n             <ion-select-option *ngFor=\"let raca of racas\" value={{raca.id}}>{{raca.nome}}</ion-select-option>\n            </ion-select> \n         </ion-item>\n      \n    \n    <ion-button expand=\"full\" (click)=\"add()\"> Salvar </ion-button>\n    \n    <ion-list>\n    \n    <ion-list-header>\n       <ion-label> \n            Listagem\n       </ion-label>\n    </ion-list-header>\n    \n    <ion-item-sliding *ngFor=\"let item of row_data\">\n     <ion-item>\n         <ion-label text-wrap>\n             <h3> Produtor       : {{ item.nomeprodutor }}</h3>\n             <h3> Fazenda        : {{ item.nomefazenda }}</h3>\n             <h3> Ident. Animal  : {{ item.identanimal}} </h3>\n             <h3> Categoria      : {{ item.nomecategoria }}</h3>\n             <h3> Raça           : {{ item.nomeraca }}</h3>\n             <h3> Ativo           : {{ item.ativo }}</h3>        \n            \n         </ion-label>\n     </ion-item>    \n     <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\" (click)=\"update(item)\">Alterar</ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n     </ion-item-options>\n    </ion-item-sliding>\n    </ion-list>\n    \n    </ion-content>\n    "

/***/ }),

/***/ "./src/app/pages/animal/animal.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/animal/animal.module.ts ***!
  \***********************************************/
/*! exports provided: AnimalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalPageModule", function() { return AnimalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _animal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animal.page */ "./src/app/pages/animal/animal.page.ts");







var routes = [
    {
        path: '',
        component: _animal_page__WEBPACK_IMPORTED_MODULE_6__["AnimalPage"]
    }
];
var AnimalPageModule = /** @class */ (function () {
    function AnimalPageModule() {
    }
    AnimalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_animal_page__WEBPACK_IMPORTED_MODULE_6__["AnimalPage"]]
        })
    ], AnimalPageModule);
    return AnimalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/animal/animal.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/animal/animal.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuaW1hbC9hbmltYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/animal/animal.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/animal/animal.page.ts ***!
  \*********************************************/
/*! exports provided: AnimalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalPage", function() { return AnimalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");



var AnimalPage = /** @class */ (function () {
    function AnimalPage(sqlite) {
        this.sqlite = sqlite;
        this.identAnimal = "";
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.id_categoria = 0;
        this.id_raca = 0;
        this.ativo = 0;
        this.row_data = []; // Table rows
        this.produtores = [];
        this.fazendas = [];
        this.categorias = [];
        this.racas = [];
        this.database_name = "ipedDB"; // DB name
        this.table_name = "animal"; // Table name
    }
    AnimalPage.prototype.createDB = function () {
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
    AnimalPage.prototype.createTable = function () {
        var _this = this;
        this.databaseObj.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS animal (id integer primary key AUTOINCREMENT NOT NULL, identanimal TEXT NOT NULL, id_produtor integer NOT NULL, id_fazenda intger NOT NULL, id_categoria integer NOT NULL, id_raca integer NOT NULL, ativo integer NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS produtor (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, email TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS fazenda (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, id_produtor integer)'],
            ['CREATE TABLE IF NOT EXISTS categoria (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, sexo TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS raca (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL)'],
        ])
            .then(function () {
            _this.getAll();
            _this.getProdutores();
            _this.getFazendas();
            _this.getCategorias();
            _this.getRacas();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    AnimalPage.prototype.add = function () {
        var _this = this;
        if (!this.identAnimal.length) {
            alert("Entre com a Identificação do Animal ! ");
            return;
        }
        if (this.id_produtor == 0) {
            alert("Entre com o Produtor !");
            return;
        }
        if (this.id_fazenda == 0) {
            alert("Entre com a Fazenda!");
            return;
        }
        if (this.id_categoria == 0) {
            alert("Entre com a Categoria !");
            return;
        }
        if (this.id_raca == 0) {
            alert("Entre com a Raça !");
            return;
        }
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (identanimal,id_produtor,id_fazenda,id_categoria,id_raca,ativo) VALUES (?,?,?,?,?,?)', [this.identAnimal, this.id_produtor, this.id_fazenda, this.id_categoria, this.id_raca, this.ativo])
            .then(function () {
            alert('Animal Inserido !');
            _this.identAnimal = "";
            _this.id_produtor = 0;
            _this.id_fazenda = 0;
            _this.id_categoria = 0;
            _this.id_raca = 0;
            _this.getAll();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    AnimalPage.prototype.getAll = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT animal.identanimal,produtor.nome as nomeprodutor,fazenda.nome as nomefazenda,categoria.nome as nomecategoria,raca.nome as nomeraca,animal.ativo from animal , produtor, fazenda, categoria, raca where animal.id_produtor=produtor.id and animal.id_fazenda=fazenda.id and animal.id_categoria=categoria.id and animal.id_raca=raca.id", [])
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
    AnimalPage.prototype.getProdutores = function () {
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
    AnimalPage.prototype.getFazendas = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM fazenda", [])
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
    AnimalPage.prototype.getCategorias = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM categoria", [])
            .then(function (res) {
            _this.categorias = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.categorias.push(res.rows.item(i));
                }
            }
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    AnimalPage.prototype.getRacas = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM raca", [])
            .then(function (res) {
            _this.racas = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.racas.push(res.rows.item(i));
                }
            }
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    AnimalPage.prototype.delete = function (item) {
        var _this = this;
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE id = " + item.id, [])
            .then(function (res) {
            alert("Animal removido !");
            _this.getAll();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    AnimalPage.prototype.update = function () {
    };
    AnimalPage.prototype.ngOnInit = function () {
        this.createDB();
    };
    AnimalPage.ctorParameters = function () { return [
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
    ]; };
    AnimalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animal',
            template: __webpack_require__(/*! raw-loader!./animal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/animal/animal.page.html"),
            styles: [__webpack_require__(/*! ./animal.page.scss */ "./src/app/pages/animal/animal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
    ], AnimalPage);
    return AnimalPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-animal-animal-module-es5.js.map