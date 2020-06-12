import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ApartePage } from './aparte.page';
const routes = [
    {
        path: '',
        component: ApartePage
    }
];
let ApartePageModule = class ApartePageModule {
};
ApartePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ApartePage]
    })
], ApartePageModule);
export { ApartePageModule };
//# sourceMappingURL=aparte.module.js.map