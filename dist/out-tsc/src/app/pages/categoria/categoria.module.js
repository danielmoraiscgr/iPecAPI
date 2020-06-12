import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CategoriaPage } from './categoria.page';
const routes = [
    {
        path: '',
        component: CategoriaPage
    }
];
let CategoriaPageModule = class CategoriaPageModule {
};
CategoriaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CategoriaPage]
    })
], CategoriaPageModule);
export { CategoriaPageModule };
//# sourceMappingURL=categoria.module.js.map