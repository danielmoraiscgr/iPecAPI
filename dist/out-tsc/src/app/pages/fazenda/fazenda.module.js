import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FazendaPage } from './fazenda.page';
const routes = [
    {
        path: '',
        component: FazendaPage
    }
];
let FazendaPageModule = class FazendaPageModule {
};
FazendaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [FazendaPage]
    })
], FazendaPageModule);
export { FazendaPageModule };
//# sourceMappingURL=fazenda.module.js.map