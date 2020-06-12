import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TipomanejoPage = class TipomanejoPage {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.row_data = []; // Table rows
    }
    save() {
        if (!this.nome.length) {
            alert("Entre com o nome do Tipo de Manejo!");
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
    }
    clearfields() {
        this.id = 0;
        this.nome = "";
    }
    ngOnInit() {
    }
};
TipomanejoPage = tslib_1.__decorate([
    Component({
        selector: 'app-tipomanejo',
        templateUrl: './tipomanejo.page.html',
        styleUrls: ['./tipomanejo.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TipomanejoPage);
export { TipomanejoPage };
//# sourceMappingURL=tipomanejo.page.js.map