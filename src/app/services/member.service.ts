import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { MemberModel } from "../models/user-models";
import { collections } from '../models/common-models';
@Injectable({
  providedIn: "root",
})
export class MemberService {
  constructor(public db: AngularFirestore) { }

  getMemberById(id: string): Observable<Array<MemberModel>> {
    return this.db
      .collection(collections.members, (ref) => ref.where("uid", "==", id))
      .valueChanges() as Observable<Array<MemberModel>>;
  }

  getMembersByRole(role: string): Observable<Array<MemberModel>> {
    return this.db
      .collection(collections.members, (ref) => ref.where("roles", "array-contains", role))
      .valueChanges() as Observable<Array<MemberModel>>;
  }

  getMembers() {
    return this.db.collection(collections.members).get().toPromise();
  }
}
