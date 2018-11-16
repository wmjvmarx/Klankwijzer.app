import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NieuwsPage } from '../pages/nieuws/nieuws';

import { AgendaPage } from '../pages/agenda/agenda';

import { VacaturesPage } from '../pages/vacatures/vacatures';

import { MuzikantenPage } from '../pages/muzikanten/muzikanten';

import { ArchiefPage } from '../pages/archief/archief';

import { PublieksprijsPage } from '../pages/publieksprijs/publieksprijs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Voorpagina', component: HomePage },
      { title: 'Nieuws', component: NieuwsPage },
      { title: 'Agenda', component: AgendaPage },
      { title: 'Vacatures', component: VacaturesPage },
      { title: 'Muzikantenpool', component: MuzikantenPage },
      { title: 'Archief', component: ArchiefPage },
      { title: 'KW Interactief', component: PublieksprijsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
