import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  pantallaSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();

      
      this.hideSplashScreen();
    });
  }

  hideSplashScreen() {
    //console.log('Hola'+Splashscreen)
    if (this.splashScreen) {
    setTimeout(() => {
      this.splashScreen.hide();
      //this.pantallaSplash = false;      
    }, 100);

    setTimeout(() => {
      //this.splashScreen.hide();
      this.pantallaSplash = false;      
    }, 3000);
    
    }
    }
}
