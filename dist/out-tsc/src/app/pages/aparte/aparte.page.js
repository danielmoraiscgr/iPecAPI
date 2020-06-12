import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ApartePage = class ApartePage {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.pesoinicial = 0;
        this.pesofinal = 0;
        this.row_data = []; // Table rows
        this.tipomanejos = [];
    }
    ;
    save() {
        if (!this.nome.length) {
            alert("Entre com o nome do Aparte !");
            return;
        }
        if (this.id_tipomanejo == 0) {
            alert("Entre com o Tipo de Manejo !");
            return;
        }
        if (this.pesoinicial == 0) {
            alert("Entre com o Peso Inicial do Aparte !");
            return;
        }
        if (this.pesofinal == 0) {
            alert("Entre com o Peso Final !");
            return;
        }
    }
    getAll() {
    }
    getTipoManejo() {
    }
    delete(item) {
    }
    update(item) {
        this.id = item.id;
        this.nome = item.nome;
        this.id_tipomanejo = item.id_tipomanejo;
        this.pesoinicial = item.pesoinicial;
        this.pesofinal = item.pesofinal;
    }
    clearfields() {
        this.id = 0;
        this.nome = "";
    }
    ngOnInit() {
    }
};
ApartePage = tslib_1.__decorate([
    Component({
        selector: 'app-aparte',
        templateUrl: './aparte.page.html',
        styleUrls: ['./aparte.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ApartePage);
export { ApartePage };
//# sourceMappingURL=aparte.page.js.map