import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AnimalPage } from './animal.page';
const routes = [
    {
        path: '',
        component: AnimalPage
    }
];
let AnimalPageModule = class AnimalPageModule {
};
AnimalPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AnimalPage]
    })
], AnimalPageModule);
export { AnimalPageModule };
//# sourceMappingURL=animal.module.js.map