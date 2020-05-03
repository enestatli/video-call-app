import { Component, OnInit } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";
import { roles } from "src/app/models/common-models";
import { MemberModel } from "src/app/models/user-models";
import { AuthService } from "src/app/services/auth.service";
import { MemberService } from "src/app/services/member.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"],
})
export class IntroPage implements OnInit {
  userInfo: MemberModel = null;
  role: BehaviorSubject<string> = new BehaviorSubject("");
  members: BehaviorSubject<Array<MemberModel>> = new BehaviorSubject([]);
  constructor(
    public authService: AuthService,
    public memberService: MemberService,
    public navCtrl: NavController,
    public platform: Platform
  ) {
    this.role.subscribe((r) => {
      if (r) {
        if (r == roles.doctor) {
          this.memberService.getMembersByRole(roles.client).subscribe((members) => {
            this.members.next(members);
          });
        } else if (r == roles.client) {
          this.memberService.getMembersByRole(roles.doctor).subscribe((members) => {
            this.members.next(members);
          });
        }
      }
    });
  }

  ngOnInit() {
    this.userInfo = this.authService.getCurrentUserInfoFromStorage();
    if (this.userInfo) {
      if (this.userInfo.roles.includes(roles.client)) {
        this.role.next(roles.client);
      } else if (this.userInfo.roles.includes(roles.doctor)) {
        this.role.next(roles.doctor);
      }
    }
  }
}
