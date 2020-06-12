import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TotalcategoriaPage } from './totalcategoria.page';
const routes = [
    {
        path: '',
        component: TotalcategoriaPage
    }
];
let TotalcategoriaPageModule = class TotalcategoriaPageModule {
};
TotalcategoriaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TotalcategoriaPage]
    })
], TotalcategoriaPageModule);
export { TotalcategoriaPageModule };
//# sourceMappingURL=totalcategoria.module.js.map