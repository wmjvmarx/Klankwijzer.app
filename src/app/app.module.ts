import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NieuwsPage } from '../pages/nieuws/nieuws';
import { AgendaPage } from '../pages/agenda/agenda';
import { VacaturesPage } from '../pages/vacatures/vacatures';
import { MuzikantenPage } from '../pages/muzikanten/muzikanten';
import { ArchiefPage } from '../pages/archief/archief';
import { PublieksprijsPage } from '../pages/publieksprijs/publieksprijs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NieuwsPage,
    AgendaPage,
    VacaturesPage,
    MuzikantenPage,
    ArchiefPage,
    PublieksprijsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Terug'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NieuwsPage,
    AgendaPage,
    VacaturesPage,
    MuzikantenPage,
    ArchiefPage,
    PublieksprijsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    Geolocation,
    FavoriteProvider,
    Device
  ]
})
export class AppModule {}
