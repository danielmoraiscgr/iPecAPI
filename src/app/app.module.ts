import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ProdutorService } from './services/produtor.service';
import { CategoriaService } from './services/categoria.service';
import { FazendaService } from './services/fazenda.service';
import { RacaService } from './services/raca.service';
import TipoManejo from './models/TipoManejo';
import { AnimalService } from './services/animal.service';
import { IonicStorageModule } from '@ionic/storage';
import { AuthGuardService } from './services/authguard.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ,[ProdutorService],[CategoriaService],[FazendaService],[RacaService],[TipoManejo],
   [AnimalService],[AuthGuardService]],
  bootstrap: [AppComponent]
 
})
export class AppModule {}
