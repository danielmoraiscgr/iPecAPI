import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let FazendaPage = class FazendaPage {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.row_data = []; // Table rows
        this.produtores = [];
        this.database_name = "ipedDB"; // DB name
        this.table_name = "fazenda"; // Table name
    }
    ;
    clearfields() {
        this.id = 0;
        this.id_produtor = 0;
        this.nome = "";
    }
    save() {
        if (this.id_produtor == null) {
            alert("Entre com o Produtor !");
            return;
        }
        if (!this.nome.length) {
            alert("Entre com o nome da Fazenda !");
            return;
        }
    }
    getAll() {
    }
    getProdutores() {
    }
    delete(item) {
    }
    update(item) {
        this.id = item.id;
        this.id_produtor = item.id_produtor;
        this.nome = item.nome;
    }
    ngOnInit() {
    }
};
FazendaPage = tslib_1.__decorate([
    Component({
        selector: 'app-fazenda',
        templateUrl: './fazenda.page.html',
        styleUrls: ['./fazenda.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], FazendaPage);
export { FazendaPage };
//# sourceMappingURL=fazenda.page.js.map