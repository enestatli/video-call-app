import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { NavController, Platform } from "@ionic/angular";
import { allRoutes } from "src/app/models/common-models";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user = {
    email: "",
    password: "",
  };

  constructor(
    public ngFireAuth: AngularFireAuth,
    public navCtrl: NavController,
    public platform: Platform
  ) {}

  ngOnInit() {}

  login() {
    this.ngFireAuth.auth
      .signInWithEmailAndPassword(this.user.email, this.user.password)
      .then((userCredentials) => {
        if (userCredentials) {
          this.navCtrl.navigateRoot(allRoutes.intro);
        } else {
          alert("Lutfen tekrar deneyin.");
        }
      });
  }
}
