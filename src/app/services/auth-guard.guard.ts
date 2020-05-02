import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { allRoutes } from "../models/common-models";

@Injectable({
  providedIn: "root",
})
export class AuthGuardGuard implements CanActivate, CanLoad {
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const hasUser = this.authService.currentUser != null;
    if (!hasUser) {
      this.router.navigate([allRoutes.login]);
    }
    return hasUser;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    const hasUser = this.authService.currentUser != null;
    if (!hasUser) {
      this.router.navigate([allRoutes.login]);
    }
    return hasUser;
  }
}
