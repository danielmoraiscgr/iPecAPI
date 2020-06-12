import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RacaPage = class RacaPage {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.row_data = []; // Table rows
    }
    save() {
        if (!this.nome.length) {
            alert("Entre com o nome da Raça!");
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
RacaPage = tslib_1.__decorate([
    Component({
        selector: 'app-raca',
        templateUrl: './raca.page.html',
        styleUrls: ['./raca.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], RacaPage);
export { RacaPage };
//# sourceMappingURL=raca.page.js.map