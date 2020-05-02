import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { NavController } from "@ionic/angular";
import { allRoutes } from "../models/common-models";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUser: any = null;
  constructor(
    public ngFireAuth: AngularFireAuth,
    public navCtrl: NavController
  ) {
    // debugger;
    this.currentUser = this.ngFireAuth.auth.currentUser;
  }

  signOut() {
    this.ngFireAuth.auth.signOut().then(() => {
      this.currentUser = null;
      setTimeout(() => {
        this.navCtrl.navigateRoot(allRoutes.login);
      }, 100);
    });
  }

  signIn(user: { email: string; password: string }) {
    this.ngFireAuth.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(
        (userCredentials) => {
          if (userCredentials) {
            // debugger;
            this.currentUser = this.ngFireAuth.auth.currentUser;
            setTimeout(() => {
              this.navCtrl.navigateRoot(allRoutes.intro);
            }, 100);
          } else {
            alert("Lutfen tekrar deneyin.");
          }
        },
        () => {
          alert("Lutfen tekrar deneyin.");
        }
      );
  }
}
