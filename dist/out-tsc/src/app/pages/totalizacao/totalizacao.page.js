import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TotalizacaoPage = class TotalizacaoPage {
    constructor() {
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalpeso = [];
        this.row_data = [];
        this.totalmanejo = [];
        this.tipomanejos = [];
        this.produtores = [];
        this.fazendas = [];
    }
    totalManejoDia() {
    }
    totalmediapeso() {
    }
    getTipoManejos() {
    }
    getProdutores() {
    }
    getFazendas(id_produtor) {
    }
    clearfields() {
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalmanejo = [];
    }
    diaAtual() {
        console.log(this.dataHoje());
    }
    dataHoje() {
        var dataatual = new Date();
        var dia = dataatual.getDate();
        var mes = dataatual.getMonth() + 1;
        var ano = dataatual.getFullYear();
        return [dia, mes, ano].join('/');
    }
    ngOnInit() {
    }
};
TotalizacaoPage = tslib_1.__decorate([
    Component({
        selector: 'app-totalizacao',
        templateUrl: './totalizacao.page.html',
        styleUrls: ['./totalizacao.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TotalizacaoPage);
export { TotalizacaoPage };
//# sourceMappingURL=totalizacao.page.js.map