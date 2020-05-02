import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { NavController, Platform } from "@ionic/angular";
import { allRoutes } from "src/app/models/common-models";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"],
})
export class IntroPage implements OnInit {
  constructor(
    public ngFireAuth: AngularFireAuth,
    public navCtrl: NavController,
    public platform: Platform
  ) {}

  ngOnInit() {}
}
