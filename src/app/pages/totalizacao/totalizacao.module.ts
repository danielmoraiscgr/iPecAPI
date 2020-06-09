import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TotalizacaoPage } from './totalizacao.page';

const routes: Routes = [
  {
    path: '',
    component: TotalizacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TotalizacaoPage]
})
export class TotalizacaoPageModule {}
