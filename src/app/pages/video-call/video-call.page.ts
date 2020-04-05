import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-video-call",
  templateUrl: "./video-call.page.html",
  styleUrls: ["./video-call.page.scss"],
})
export class VideoCallPage implements OnInit {
  getOpenTokSession = firebase.functions().httpsCallable("getOpenTokSession");
  constructor() {}
  ngOnInit() {
    this.getOpenTokSession().then(function (result) {
      var sanitizedMessage = result.data.text;
      console.log(sanitizedMessage);
    });
  }
}
