import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TotalcategoriaracaPage } from './totalcategoriaraca.page';

const routes: Routes = [
  {
    path: '',
    component: TotalcategoriaracaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TotalcategoriaracaPage]
})
export class TotalcategoriaracaPageModule {}
