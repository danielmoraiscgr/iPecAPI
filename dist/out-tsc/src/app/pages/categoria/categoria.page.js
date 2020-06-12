import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CategoriaPage = class CategoriaPage {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.sexo = "";
        this.row_data = []; // Table rows
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
    }
    getAll() {
    }
    delete(item) {
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
    }
};
CategoriaPage = tslib_1.__decorate([
    Component({
        selector: 'app-categoria',
        templateUrl: './categoria.page.html',
        styleUrls: ['./categoria.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CategoriaPage);
export { CategoriaPage };
//# sourceMappingURL=categoria.page.js.map