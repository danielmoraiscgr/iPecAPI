import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TotalcategoriaracaPage = class TotalcategoriaracaPage {
    constructor() {
        this.id_tipomanejo = 0;
        this.id_produtor = 0;
        this.id_fazenda = 0;
        this.totalpeso = [];
        this.row_data = [];
        this.totalcategoriasracas = [];
        this.tipomanejos = [];
        this.produtores = [];
        this.fazendas = [];
    }
    totalCategoriaRaca() {
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
        this.totalcategoriasracas = [];
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
TotalcategoriaracaPage = tslib_1.__decorate([
    Component({
        selector: 'app-totalcategoriaraca',
        templateUrl: './totalcategoriaraca.page.html',
        styleUrls: ['./totalcategoriaraca.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TotalcategoriaracaPage);
export { TotalcategoriaracaPage };
//# sourceMappingURL=totalcategoriaraca.page.js.map