import { Component } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { allRoutes } from "./models/common-models";
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
    public ngFireAuth: AngularFireAuth // private splashScreen: SplashScreen, // private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // these are for native
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      this.checkAuthRedirect((result) => {
        //debugger;
        if (result) {
          this.navCtrl.navigateRoot(allRoutes.intro);
        } else {
          this.navCtrl.navigateRoot(allRoutes.login);
        }
      });
    });
  }

  checkAuthRedirect(callback: (result: boolean) => any) {
    this.ngFireAuth.auth.onAuthStateChanged((_user) => {
      // debugger;
      if (_user) {
        // User logged in already or has just logged in.
        callback(true);
      } else {
        // User not logged in or has just logged out.
        callback(false);
      }
    });
  }
  logout() {
    this.ngFireAuth.auth.signOut().then(() => {
      this.navCtrl.navigateRoot(allRoutes.login);
    });
  }
}
