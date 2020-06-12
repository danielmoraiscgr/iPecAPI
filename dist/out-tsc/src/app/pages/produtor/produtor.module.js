import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProdutorPage } from './produtor.page';
const routes = [
    {
        path: '',
        component: ProdutorPage
    }
];
let ProdutorPageModule = class ProdutorPageModule {
};
ProdutorPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProdutorPage]
    })
], ProdutorPageModule);
export { ProdutorPageModule };
//# sourceMappingURL=produtor.module.js.map