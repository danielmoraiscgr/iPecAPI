import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TotalcategoriaracaPage } from './totalcategoriaraca.page';
const routes = [
    {
        path: '',
        component: TotalcategoriaracaPage
    }
];
let TotalcategoriaracaPageModule = class TotalcategoriaracaPageModule {
};
TotalcategoriaracaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TotalcategoriaracaPage]
    })
], TotalcategoriaracaPageModule);
export { TotalcategoriaracaPageModule };
//# sourceMappingURL=totalcategoriaraca.module.js.map