import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { MemberModel } from "../models/user-models";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(public db: AngularFirestore) {}

  getUserById(id: string): Observable<Array<MemberModel>> {
    return this.db
      .collection("users", (ref) => ref.where("uid", "==", id))
      .valueChanges() as Observable<Array<MemberModel>>;
  }

  getUserByRole(role: string): Observable<Array<MemberModel>> {
    return this.db
      .collection("users", (ref) => ref.where("roles", "array-contains", role))
      .valueChanges() as Observable<Array<MemberModel>>;
  }

  getUsers() {
    return this.db.collection("users").get().toPromise();
  }
}
