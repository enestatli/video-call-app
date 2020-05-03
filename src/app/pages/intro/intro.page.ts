import { Component, OnInit } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";
import { roles } from "src/app/models/common-models";
import { MemberModel } from "src/app/models/user-models";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"],
})
export class IntroPage implements OnInit {
  userInfo: MemberModel = null;
  role: BehaviorSubject<string> = new BehaviorSubject("");
  userList: BehaviorSubject<Array<MemberModel>> = new BehaviorSubject([]);
  constructor(
    public authService: AuthService,
    public userService: UserService,
    public navCtrl: NavController,
    public platform: Platform
  ) {
    this.role.subscribe((r) => {
      if (r) {
        if (r == roles.doctor) {
          this.userService.getUserByRole(roles.member).subscribe((members) => {
            this.userList.next(members);
          });
        } else if (r == roles.member) {
          this.userService.getUserByRole(roles.doctor).subscribe((members) => {
            this.userList.next(members);
          });
        }
      }
    });
  }

  ngOnInit() {
    this.userInfo = this.authService.getCurrentUserInfoFromStorage();
    if (this.userInfo) {
      if (this.userInfo.roles.includes(roles.member)) {
        this.role.next(roles.member);
      } else if (this.userInfo.roles.includes(roles.doctor)) {
        this.role.next(roles.doctor);
      }
    }
  }
}
