import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//import { DatabaseService } from './database.service';



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
      icon: 'list'
    },
    {
      title: 'Fazendas',
      url: 'fazenda',
      icon: 'list'
    },
    {
      title: 'Categorias',
      url: 'categoria',
      icon: 'list'
    },
    {
      title: 'Raças',
      url: 'raca',
      icon: 'list'
    },
    {
      title: 'Apartes',
      url: 'aparte',
      icon: 'list'
    },
    {
      title: 'Tipo de Manejo',
      url: 'tipomanejo',
      icon: 'list'
    },
    {
      title: 'Animais',
      url: 'animal',
      icon: 'list'
    },
    {
      title: 'Manejo',
      url: 'manejo',
      icon: 'list'
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
  
  