import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TotaltipomanejoapartePage } from './totaltipomanejoaparte.page';

const routes: Routes = [
  {
    path: '',
    component: TotaltipomanejoapartePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TotaltipomanejoapartePage]
})
export class TotaltipomanejoapartePageModule {}
