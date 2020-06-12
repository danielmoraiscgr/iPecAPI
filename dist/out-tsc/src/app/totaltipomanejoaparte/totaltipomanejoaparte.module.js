import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TotaltipomanejoapartePage } from './totaltipomanejoaparte.page';
const routes = [
    {
        path: '',
        component: TotaltipomanejoapartePage
    }
];
let TotaltipomanejoapartePageModule = class TotaltipomanejoapartePageModule {
};
TotaltipomanejoapartePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TotaltipomanejoapartePage]
    })
], TotaltipomanejoapartePageModule);
export { TotaltipomanejoapartePageModule };
//# sourceMappingURL=totaltipomanejoaparte.module.js.map