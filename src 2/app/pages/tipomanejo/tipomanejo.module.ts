import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipomanejoPage } from './tipomanejo.page';

const routes: Routes = [
  {
    path: '',
    component: TipomanejoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipomanejoPage]
})
export class TipomanejoPageModule {}
