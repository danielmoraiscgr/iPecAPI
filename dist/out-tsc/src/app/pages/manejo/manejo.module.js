import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ManejoPage } from './manejo.page';
const routes = [
    {
        path: '',
        component: ManejoPage
    }
];
let ManejoPageModule = class ManejoPageModule {
};
ManejoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ManejoPage]
    })
], ManejoPageModule);
export { ManejoPageModule };
//# sourceMappingURL=manejo.module.js.map