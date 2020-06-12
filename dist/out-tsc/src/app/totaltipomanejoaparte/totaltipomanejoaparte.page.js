import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TotaltipomanejoapartePage = class TotaltipomanejoapartePage {
    constructor() {
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalpeso = [];
        this.row_data = [];
        this.totaltipomanejoapartes = [];
        this.tipomanejos = [];
        this.produtores = [];
        this.fazendas = [];
    }
    totalTipomanejoAparte() {
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
        this.datainicial = null;
        this.datafinal = null;
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalpeso = [];
        this.totaltipomanejoapartes = [];
    }
    diaAtual() {
        //let datamanejo=this.datepipe.transform(this.data, 'MM/dd/yyyy');
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
TotaltipomanejoapartePage = tslib_1.__decorate([
    Component({
        selector: 'app-totaltipomanejoaparte',
        templateUrl: './totaltipomanejoaparte.page.html',
        styleUrls: ['./totaltipomanejoaparte.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TotaltipomanejoapartePage);
export { TotaltipomanejoapartePage };
//# sourceMappingURL=totaltipomanejoaparte.page.js.map