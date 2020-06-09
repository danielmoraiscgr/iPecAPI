import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Produtor',
      url: 'produtor',
      icon: 'person'
    },
    {
      title: 'Fazendas',
      url: 'fazenda',
      icon: 'globe'
    },
    {
      title: 'Categorias',
      url: 'categoria',
      icon: 'paw'
    },
    {
      title: 'Raças',
      url: 'raca',
      icon: 'trophy'
    },    
    {
      title: 'Tipo de Manejo',
      url: 'tipomanejo',
      icon: 'list'
    },
    {
      title: 'Apartes',
      url: 'aparte',
      icon: 'trending-up'
    },
    {
      title: 'Animais',
      url: 'animal',
      icon: 'at'
    },
    {
      title: 'Manejo',
      url: 'manejo',
      icon: 'stats'
    },
    {
      title: 'Saldo por Categoria',
      url: 'saldoporcategoria',
      icon: 'calculator'
    },
    {
      title: 'Calc por Data',
      url: 'totalizacao',
      icon: 'calculator'
    },
    {
      title: 'Calc por Categ/Raça/Aparte',
      url: 'totalcategoriaraca',
      icon: 'calculator'
    },
    {
      title: 'Calc por Tipo Manejo/Aparte',
      url: 'totaltipomanejoaparte',
      icon: 'calculator'
    },
    {
      title: 'Calc por Categoria',
      url: 'totalcategoria',
      icon: 'calculator'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar)
      {
        this.initializeApp();
      }
    
      initializeApp() {
        this.platform.ready().then(() => {
          this.statusBar.styleDefault();
          this.splashScreen.hide();
        });
      }
    }
  
  