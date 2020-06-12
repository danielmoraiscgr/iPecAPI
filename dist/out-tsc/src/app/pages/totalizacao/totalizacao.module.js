import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TotalizacaoPage } from './totalizacao.page';
const routes = [
    {
        path: '',
        component: TotalizacaoPage
    }
];
let TotalizacaoPageModule = class TotalizacaoPageModule {
};
TotalizacaoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TotalizacaoPage]
    })
], TotalizacaoPageModule);
export { TotalizacaoPageModule };
//# sourceMappingURL=totalizacao.module.js.map