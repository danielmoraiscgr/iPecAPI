import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TotalcategoriaPage } from './totalcategoria.page';

const routes: Routes = [
  {
    path: '',
    component: TotalcategoriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TotalcategoriaPage]
})
export class TotalcategoriaPageModule {}
