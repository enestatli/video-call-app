import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as firebase from "firebase";

@Component({
  selector: "app-video-call",
  templateUrl: "./video-call.page.html",
  styleUrls: ["./video-call.page.scss"],
})
export class VideoCallPage implements OnInit {
  getOpenTokSession = firebase.functions().httpsCallable("getOpenTokSession");
  constructor(public httpClient: HttpClient) {}
  ngOnInit() {
    this.getOpenTokSession().then(
      (result: firebase.functions.HttpsCallableResult) => {
        console.log(result.data);
      }
    );
    // this.httpClient
    //   .get(
    //     "https://us-central1-video-call-app-5bb0c.cloudfunctions.net/helloWorld"
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }
}
