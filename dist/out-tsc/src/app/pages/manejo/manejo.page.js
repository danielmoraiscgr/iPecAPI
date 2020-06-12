import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
let ManejoPage = class ManejoPage {
    constructor() {
        this.id = 0;
        this.identanimal = "";
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.id_categoria = 0;
        this.id_raca = 0;
        this.id_aparte = 0;
        this.peso = null;
        this.row_data = [];
        this.tipomanejos = [];
        this.produtores = [];
        this.fazendas = [];
        this.categorias = [];
        this.racas = [];
        this.apartes = [];
    }
    scrollToTop() {
        this.content.scrollToTop(400);
    }
    ionViewDidEnter() {
        this.scrollToTop();
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
    }
    getAll() {
    }
    getTipoManejos() {
    }
    getProdutores() {
    }
    getFazendas(id_produtor) {
    }
    getCategorias() {
    }
    getRacas() {
    }
    getApartes(id_tipomanejo) {
    }
    delete(item) {
    }
    limparManejos() {
    }
    update(item) {
        this.id = item.id;
        this.data = item.data;
        this.id_tipomanejo = item.id_tipomanejo;
        this.identanimal = item.identanimal;
        this.id_produtor = item.id_produtor;
        this.id_fazenda = item.id_fazenda;
        this.id_categoria = item.id_categoria;
        this.id_raca = item.id_raca;
        this.peso = item.peso;
        this.id_aparte = item.id_aparte;
        this.getFazendas(this.id_produtor);
        this.scrollToTop();
    }
    clearfields() {
        this.id = 0;
        this.data = null;
        this.id_tipomanejo = 0;
        this.identanimal = "";
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.id_categoria = 0;
        this.id_raca = 0;
        this.peso = null;
        this.id_aparte = 0;
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChild(IonContent, { static: true }),
    tslib_1.__metadata("design:type", IonContent)
], ManejoPage.prototype, "content", void 0);
ManejoPage = tslib_1.__decorate([
    Component({
        selector: 'app-manejo',
        templateUrl: './manejo.page.html',
        styleUrls: ['./manejo.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ManejoPage);
export { ManejoPage };
//# sourceMappingURL=manejo.page.js.map