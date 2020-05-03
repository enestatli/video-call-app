import { Component, OnInit } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user = {
    email: "enestatli@test.com",
    password: "123456",
  };

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.signIn(this.user);
  }
}
