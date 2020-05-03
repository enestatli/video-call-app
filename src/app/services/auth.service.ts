import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { NavController } from "@ionic/angular";
import { allRoutes, storageKeys } from "../models/common-models";
import { MemberService } from "./member.service";
import { MemberModel } from "../models/user-models";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUser: any = null;
  constructor(
    public ngFireAuth: AngularFireAuth,
    public navCtrl: NavController,
    public memberService: MemberService
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
              this.getCurrentUserinfo((member) => {
                if (member) {
                  this.setCurrentUserInfo(member);
                  this.navCtrl.navigateRoot(allRoutes.intro);
                }
              });
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

  getCurrentUserinfo(callback: (member: MemberModel) => any) {
    this.memberService.getMemberById(this.currentUser.uid).subscribe((members) => {
      if (Array.isArray(members) && members.length > 0) {
        const member = members[0];
        callback(member);
      }
    });
  }

  setCurrentUserInfo(member: MemberModel) {
    localStorage.setItem(storageKeys.currentMemberInfo, JSON.stringify(member));
  }

  getCurrentUserInfoFromStorage(): MemberModel {
    const jsonStr = localStorage.getItem(storageKeys.currentMemberInfo);
    if (jsonStr) {
      return JSON.parse(jsonStr) as MemberModel;
    } else {
      return null;
    }
  }
}
