import { Component, OnInit, ViewChild } from "@angular/core";
import { allRoutes } from "src/app/models/common-models";
import { NavController, IonSlides, IonSlide } from "@ionic/angular";

@Component({
  selector: "app-guide",
  templateUrl: "./guide.page.html",
  styleUrls: ["./guide.page.scss"]
})
export class GuidePage implements OnInit {
  slidesEnded: boolean = false; // variables -> references -> constructor -> angular/ionic methods -> user methods
  @ViewChild("slides", { static: true }) slidesRef: IonSlides;
  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.slidesRef.ionSlideReachEnd.subscribe(() => {
      this.slidesEnded = true;
    });
  }

  proceed() {
    this.navCtrl.navigateRoot(allRoutes.tabs);
  }

  goSettings() {
    this.navCtrl.navigateRoot(allRoutes.settings);
  }

  next() {
    this.slidesRef.slideNext();
  }
}
