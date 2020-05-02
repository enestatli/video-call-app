import { Component } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";
import { AuthService } from "./services/auth.service";
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public authService: AuthService // private splashScreen: SplashScreen, // private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // these are for native
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  logout() {
    this.authService.signOut();
  }
}
