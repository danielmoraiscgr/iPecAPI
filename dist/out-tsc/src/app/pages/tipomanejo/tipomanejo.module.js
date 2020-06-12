import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TipomanejoPage } from './tipomanejo.page';
const routes = [
    {
        path: '',
        component: TipomanejoPage
    }
];
let TipomanejoPageModule = class TipomanejoPageModule {
};
TipomanejoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TipomanejoPage]
    })
], TipomanejoPageModule);
export { TipomanejoPageModule };
//# sourceMappingURL=tipomanejo.module.js.map