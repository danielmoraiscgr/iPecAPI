import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProdutorService } from '../../services/produtor.service';
let ProdutorPage = class ProdutorPage {
    constructor(produtorService) {
        this.produtorService = produtorService;
        this.id = 0;
        this.nome = "";
        this.cpf = "";
    }
    save(item) {
        this.produtorService.save(item);
        this.clearfields();
        this.getAll();
    }
    update(item) {
        this.produtorService.get(item.id);
        this.id = item.id;
        this.nome = item.nome;
        this.cpf = item.cpf;
    }
    delete(item) {
        this.produtorService.remove(item.id);
        this.getAll();
    }
    getAll() {
        this.produtorService.getAll().subscribe(data => {
            this.produtores = data;
        });
    }
    clearfields() {
        this.id = 0;
        this.nome = "";
        this.cpf = "";
    }
    ngOnInit() {
        this.getAll();
    }
};
ProdutorPage = tslib_1.__decorate([
    Component({
        selector: 'app-produtor',
        templateUrl: './produtor.page.html',
        styleUrls: ['./produtor.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProdutorService])
], ProdutorPage);
export { ProdutorPage };
//# sourceMappingURL=produtor.page.js.map