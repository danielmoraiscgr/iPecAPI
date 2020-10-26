import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { title } from 'process';

const rolename = localStorage.getItem('rolename');

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
  
  