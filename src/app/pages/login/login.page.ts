import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/Auth/auth";
import { NavController, Platform } from "@ionic/angular";
import { allRoutes } from "src/app/models/common-models";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  users = [
    {
      username: "enes",
      email: "enestatli@test.com",
      password: "123456",
    },
    {
      username: "boss",
      email: "fatihboss@test.com",
      password: "123456",
    },
  ];
  constructor(
    public ngFireAuth: AngularFireAuth,
    public navCtrl: NavController,
    public platform: Platform
  ) {}

  ngOnInit() {
    let user = null;
    if (this.platform.is("ios")) {
      user = this.users.find((u) => u.username == "boss");
    } else {
      user = this.users.find((u) => u.username == "enes");
    }

    if (user) {
      this.ngFireAuth.auth
        .signInWithEmailAndPassword(user.email, user.password)
        .then((userCredentials) => {
          if (userCredentials) {
            this.navCtrl.navigateRoot(allRoutes.videoCall);
          } else {
            alert("Lutfen tekrar deneyin.");
          }
        });
    }
  }
}
