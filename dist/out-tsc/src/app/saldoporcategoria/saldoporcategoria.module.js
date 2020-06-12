import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SaldoporcategoriaPage } from './saldoporcategoria.page';
const routes = [
    {
        path: '',
        component: SaldoporcategoriaPage
    }
];
let SaldoporcategoriaPageModule = class SaldoporcategoriaPageModule {
};
SaldoporcategoriaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SaldoporcategoriaPage]
    })
], SaldoporcategoriaPageModule);
export { SaldoporcategoriaPageModule };
//# sourceMappingURL=saldoporcategoria.module.js.map