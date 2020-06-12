import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SaldoporcategoriaPage = class SaldoporcategoriaPage {
    constructor(r) {
        this.database_name = "ipedDB"; // DB name
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.saldoporcategorias = [];
        this.produtores = [];
        this.fazendas = [];
    }
    saldoporCategoria() {
    }
    totalanimais() {
    }
    getProdutores() {
    }
    getFazendas(id_produtor) {
    }
    clearfields() {
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.saldoporcategorias = [];
    }
    ngOnInit() {
    }
};
SaldoporcategoriaPage = tslib_1.__decorate([
    Component({
        selector: 'app-saldoporcategoria',
        templateUrl: './saldoporcategoria.page.html',
        styleUrls: ['./saldoporcategoria.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], SaldoporcategoriaPage);
export { SaldoporcategoriaPage };
//# sourceMappingURL=saldoporcategoria.page.js.map