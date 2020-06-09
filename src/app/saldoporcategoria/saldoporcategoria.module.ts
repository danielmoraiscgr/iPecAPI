import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaldoporcategoriaPage } from './saldoporcategoria.page';

const routes: Routes = [
  {
    path: '',
    component: SaldoporcategoriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaldoporcategoriaPage]
})
export class SaldoporcategoriaPageModule {}
