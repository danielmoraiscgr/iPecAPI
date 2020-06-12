import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
let AnimalPage = class AnimalPage {
    constructor() {
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
    }
    scrollToTop() {
        this.content.scrollToTop(400);
    }
    ionViewDidEnter() {
        this.scrollToTop();
    }
    ;
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
        this.scrollToTop();
    }
    getAll() {
    }
    getProdutores() {
    }
    getFazendas(id_produtor) {
    }
    getCategorias() {
    }
    getRacas() {
    }
    delete(item) {
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
    }
};
tslib_1.__decorate([
    ViewChild(IonContent, { static: true }),
    tslib_1.__metadata("design:type", IonContent)
], AnimalPage.prototype, "content", void 0);
AnimalPage = tslib_1.__decorate([
    Component({
        selector: 'app-animal',
        templateUrl: './animal.page.html',
        styleUrls: ['./animal.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AnimalPage);
export { AnimalPage };
//# sourceMappingURL=animal.page.js.map