(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-animal-animal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/animal/animal.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/animal/animal.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Cadastro de Animais</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<ion-card>\n\n    <ion-input hidden [(ngModel)]=\"id\"></ion-input>\n\n    <ion-item>\n        <ion-label position=\"floating\">Produtor</ion-label>\n        <ion-select (blur)=\"onBlur(getFazendas(id_produtor))\"  [(ngModel)]=\"id_produtor\" okText=\"Ok\" cancelText=\"Voltar\">\n         <ion-select-option *ngFor=\"let produtor of produtores\" value={{produtor.id}}>{{produtor.nome}}</ion-select-option>\n        </ion-select> \n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Fazenda</ion-label>\n          <ion-select [(ngModel)]=\"id_fazenda\" okText=\"Ok\" cancelText=\"Voltar\">\n           <ion-select-option *ngFor=\"let fazenda of fazendas\" value={{fazenda.id}}>{{fazenda.nome}}</ion-select-option>\n          </ion-select> \n        </ion-item>\n      \n        <ion-item>\n            <ion-label position=\"floating\">N. Animal : </ion-label>\n            <ion-input [(ngModel)]=\"identanimal\"></ion-input>\n       </ion-item>\n     \n        <ion-item>\n            <ion-label position=\"floating\">Categoria</ion-label>\n            <ion-select [(ngModel)]=\"id_categoria\" okText=\"Ok\" cancelText=\"Voltar\">\n             <ion-select-option *ngFor=\"let categoria of categorias\" value={{categoria.id}}>{{categoria.nome}}</ion-select-option>\n            </ion-select> \n          </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"floating\">Raça</ion-label>\n            <ion-select  [(ngModel)]=\"id_raca\" okText=\"Ok\" cancelText=\"Voltar\">\n             <ion-select-option *ngFor=\"let raca of racas\" value={{raca.id}}>{{raca.nome}}</ion-select-option>\n            </ion-select> \n         </ion-item>\n\n        <ion-item>\n          <ion-label>Ativo</ion-label>\n          <ion-checkbox readonly=\"true\" [(ngModel)]=\"ativo\"></ion-checkbox>\n        </ion-item> \n      \n    <ion-button expand=\"full\" (click)=\"save()\"> Salvar </ion-button>\n    <ion-button expand=\"full\" (click)=\"clearfields()\"> Limpar Campos </ion-button>\n    \n    <ion-list>\n    \n    <ion-list-header>\n       <ion-label> \n            Listagem\n       </ion-label>\n    </ion-list-header>\n    \n    <ion-item-sliding *ngFor=\"let item of row_data\">\n     <ion-item>\n         <ion-label text-wrap>\n             <h3> Produtor       : {{ item.nomeprodutor }}</h3>\n             <h3> Fazenda        : {{ item.nomefazenda }}</h3>\n             <h3> Ident. Animal  : {{ item.identanimal}} </h3>\n             <h3> Categoria      : {{ item.nomecategoria }}</h3>\n             <h3> Raça           : {{ item.nomeraca }}</h3>\n             <h3> Ativo           : {{ item.ativo }}</h3>        \n            \n         </ion-label>\n     </ion-item>    \n     <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\" (click)=\"update(item)\">Alterar</ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"delete(item)\">Excluir</ion-item-option>         \n     </ion-item-options>\n    </ion-item-sliding>\n    </ion-list>\n  </ion-card>\n    </ion-content>\n    "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _animal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animal.page */ "./src/app/pages/animal/animal.page.ts");







const routes = [
    {
        path: '',
        component: _animal_page__WEBPACK_IMPORTED_MODULE_6__["AnimalPage"]
    }
];
let AnimalPageModule = class AnimalPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/animal/animal.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/animal/animal.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('logo.JPG');\n  background-color: #4076b6;\n  background-repeat: no-repeat;\n  background-size: auto;\n  background-attachment: fixed;\n}\n\napp-animal ion-content {\n  background-image: url('logo.JPG');\n  background-size: cover;\n  background-position-x: 50%;\n  background-attachment: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxib3JnZXMvRG9jdW1lbnRzL2lvbmljL2lQZWN1YXJpby9zcmMvYXBwL3BhZ2VzL2FuaW1hbC9hbmltYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hbmltYWwvYW5pbWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURJSTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hbmltYWwvYW5pbWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHlcbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2Vucy9sb2dvLkpQR1wiKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCAxMTgsIDE4MiwgMSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuYXBwLWFuaW1hbHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZW5zL2xvZ28uSlBHJyk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIH1cbiAgfSIsImJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2Vucy9sb2dvLkpQR1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNzZiNjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG5hcHAtYW5pbWFsIGlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlbnMvbG9nby5KUEdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let AnimalPage = class AnimalPage {
    constructor(sqlite) {
        this.sqlite = sqlite;
        this.id = 0;
        this.identanimal = "";
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.id_categoria = 0;
        this.id_raca = 0;
        this.ativo = 1;
        this.row_data = []; // Table rows
        this.produtores = [];
        this.fazendas = [];
        this.categorias = [];
        this.racas = [];
        this.database_name = "ipedDB"; // DB name
        this.table_name = "animal"; // Table name
    }
    scrollToTop() {
        this.content.scrollToTop(400);
    }
    ionViewDidEnter() {
        this.scrollToTop();
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
            ['CREATE TABLE IF NOT EXISTS animal (id integer primary key AUTOINCREMENT NOT NULL, identanimal TEXT NOT NULL, id_produtor integer NOT NULL, id_fazenda intger NOT NULL, id_categoria integer NOT NULL, id_raca integer NOT NULL, ativo integer NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS produtor (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, email TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS fazenda (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, id_produtor integer)'],
            ['CREATE TABLE IF NOT EXISTS categoria (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, sexo TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS raca (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT NOT NULL)'],
        ])
            .then(() => {
            this.getAll();
            this.getProdutores();
            this.getCategorias();
            this.getRacas();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    save() {
        if (!this.identanimal.length) {
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
        if (this.id != 0) {
            this.databaseObj.executeSql('UPDATE ' + this.table_name + ' set identanimal=?,id_produtor=?,id_fazenda=?,id_categoria=?,id_raca=?,ativo=? where id=?', [this.identanimal, this.id_produtor, this.id_fazenda, this.id_categoria, this.id_raca, this.ativo, this.id])
                .then(() => {
                alert('Animal Atualizada !');
                this.clearfields();
                this.getAll();
            })
                .catch(e => {
                alert("error " + JSON.stringify(e));
            });
        }
        else {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (identanimal,id_produtor,id_fazenda,id_categoria,id_raca,ativo) VALUES (?,?,?,?,?,?)', [this.identanimal, this.id_produtor, this.id_fazenda, this.id_categoria, this.id_raca, this.ativo ? 1 : 0])
                .then(() => {
                alert('Animal Inserido !');
                this.clearfields();
                this.getAll();
            })
                .catch(e => {
                alert("error " + JSON.stringify(e));
            });
        }
        this.scrollToTop();
    }
    getAll() {
        this.databaseObj.executeSql("SELECT animal.identanimal,produtor.nome as nomeprodutor,fazenda.nome as nomefazenda,categoria.nome as nomecategoria,raca.nome as nomeraca,animal.ativo from animal , produtor, fazenda, categoria, raca where animal.id_produtor=produtor.id and animal.id_fazenda=fazenda.id and animal.id_categoria=categoria.id and animal.id_raca=raca.id", [])
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
    getProdutores() {
        this.databaseObj.executeSql("SELECT * FROM produtor", [])
            .then((res) => {
            this.produtores = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.produtores.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    compareFn(optionOne, optionTwo) {
        return optionOne.id === optionTwo.id;
    }
    getFazendas(id_produtor) {
        this.databaseObj.executeSql("SELECT * FROM fazenda where id_produtor=?", [this.id_produtor])
            .then((res) => {
            this.fazendas = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.fazendas.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    getCategorias() {
        this.databaseObj.executeSql("SELECT * FROM categoria", [])
            .then((res) => {
            this.categorias = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.categorias.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    getRacas() {
        this.databaseObj.executeSql("SELECT * FROM raca", [])
            .then((res) => {
            this.racas = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.racas.push(res.rows.item(i));
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    delete(item) {
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE id=?", [item.id])
            .then((res) => {
            alert("Animal removido !");
            this.getAll();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    update(item) {
        this.id = item.id;
        this.identanimal = item.identanimal;
        this.id_produtor = item.id_produtor;
        this.id_fazenda = item.id_fazenda;
        this.id_categoria = item.id_categoria;
        this.id_raca = item.id_raca;
        this.ativo = item.ativo;
        this.getFazendas(item.id_produtor);
        this.scrollToTop();
    }
    clearfields() {
        this.id = 0;
        this.identanimal = "";
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.id_categoria = 0;
        this.id_raca = 0;
        this.ativo = 1;
    }
    ngOnInit() {
        this.createDB();
    }
};
AnimalPage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], AnimalPage.prototype, "content", void 0);
AnimalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animal',
        template: __webpack_require__(/*! raw-loader!./animal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/animal/animal.page.html"),
        styles: [__webpack_require__(/*! ./animal.page.scss */ "./src/app/pages/animal/animal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
], AnimalPage);



/***/ })

}]);
//# sourceMappingURL=pages-animal-animal-module-es2015.js.map