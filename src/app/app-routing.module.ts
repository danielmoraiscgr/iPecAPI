import { NgModule , LOCALE_ID} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/authguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuardService]
  },
  {
    path: 'produtor',
    loadChildren: () => import('./pages/produtor/produtor.module').then(m => m.ProdutorPageModule), canActivate: [AuthGuardService]
  },
  {
    path: 'fazenda',
    loadChildren: () => import('./pages/fazenda/fazenda.module').then(m => m.FazendaPageModule), canActivate: [AuthGuardService]
  },
  {
    path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module').then(m => m.CategoriaPageModule), canActivate: [AuthGuardService]
  },
  {
    path: 'raca',
    loadChildren: () => import('./pages/raca/raca.module').then(m => m.RacaPageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'aparte',
    loadChildren: () => import('./pages/aparte/aparte.module').then(m => m.ApartePageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'tipomanejo',
    loadChildren: () => import('./pages/tipomanejo/tipomanejo.module').then(m => m.TipomanejoPageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'animal',
    loadChildren: () => import('./pages/animal/animal.module').then(m => m.AnimalPageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'manejo',
    loadChildren: () => import('./pages/manejo/manejo.module').then(m => m.ManejoPageModule),canActivate: [AuthGuardService]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'logoff', loadChildren: './pages/logoff/logoff.module#LogoffPageModule' }
 
 /*
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
  { path: 'saldoporcategoria', loadChildren: './saldoporcategoria/saldoporcategoria.module#SaldoporcategoriaPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
