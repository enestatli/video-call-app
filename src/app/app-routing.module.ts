import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { allRoutes } from "./models/common-models";
import { AuthGuardGuard } from "./services/auth-guard.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: allRoutes.login,
    pathMatch: "full",
  },
  {
    path: allRoutes.login,
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: allRoutes.intro,
    loadChildren: () =>
      import("./pages/intro/intro.module").then((m) => m.IntroPageModule),
    canActivate: [AuthGuardGuard],
  },
  {
    path: allRoutes.chat,
    loadChildren: () =>
      import("./pages/chat/chat.module").then((m) => m.ChatPageModule),
    canActivate: [AuthGuardGuard],
  },
  {
    path: allRoutes.profile,
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: allRoutes.guide,
    loadChildren: () =>
      import("./pages/guide/guide.module").then((m) => m.GuidePageModule),
  },
  {
    path: allRoutes.tabs,
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: allRoutes.settings,
    loadChildren: () =>
      import("./pages/settings/settings.module").then(
        (m) => m.SettingsPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
