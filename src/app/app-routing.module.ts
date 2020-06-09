import { NgModule , LOCALE_ID} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'produtor',
    loadChildren: () => import('./pages/produtor/produtor.module').then(m => m.ProdutorPageModule)
  },
  {
    path: 'fazenda',
    loadChildren: () => import('./pages/fazenda/fazenda.module').then(m => m.FazendaPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module').then(m => m.CategoriaPageModule)
  },
  {
    path: 'raca',
    loadChildren: () => import('./pages/raca/raca.module').then(m => m.RacaPageModule)
  },
  {
    path: 'aparte',
    loadChildren: () => import('./pages/aparte/aparte.module').then(m => m.ApartePageModule)
  },
  {
    path: 'tipomanejo',
    loadChildren: () => import('./pages/tipomanejo/tipomanejo.module').then(m => m.TipomanejoPageModule)
  },
  {
    path: 'animal',
    loadChildren: () => import('./pages/animal/animal.module').then(m => m.AnimalPageModule)
  },
  {
    path: 'manejo',
    loadChildren: () => import('./pages/manejo/manejo.module').then(m => m.ManejoPageModule)
  },
  { path: 'produtor', loadChildren: './pages/produtor/produtor.module#ProdutorPageModule' },
  { path: 'categoria', loadChildren: './pages/categoria/categoria.module#CategoriaPageModule' },
  { path: 'fazenda', loadChildren: './pages/fazenda/fazenda.module#FazendaPageModule' },
  { path: 'raca', loadChildren: './pages/raca/raca.module#RacaPageModule' },
  { path: 'aparte', loadChildren: './pages/aparte/aparte.module#ApartePageModule' },
  { path: 'tipomanejo', loadChildren: './pages/tipomanejo/tipomanejo.module#TipomanejoPageModule' },
  { path: 'animal', loadChildren: './pages/animal/animal.module#AnimalPageModule' },
  { path: 'manejo', loadChildren: './pages/manejo/manejo.module#ManejoPageModule' },
  { path: 'totalizacao', loadChildren: './pages/totalizacao/totalizacao.module#TotalizacaoPageModule' },
  { path: 'totalcategoriaraca', loadChildren: './totalcategoriaraca/totalcategoriaraca.module#TotalcategoriaracaPageModule' },
  { path: 'totaltipomanejoaparte', loadChildren: './totaltipomanejoaparte/totaltipomanejoaparte.module#TotaltipomanejoapartePageModule' },
  { path: 'totalcategoria', loadChildren: './totalcategoria/totalcategoria.module#TotalcategoriaPageModule' },
  { path: 'saldoporcategoria', loadChildren: './saldoporcategoria/saldoporcategoria.module#SaldoporcategoriaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
