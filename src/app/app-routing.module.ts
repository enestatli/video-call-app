import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { allRoutes } from "./models/common-models";

const routes: Routes = [
  {
    path: "",
    redirectTo: allRoutes.intro,
    pathMatch: "full",
  },
  {
    path: allRoutes.intro,
    loadChildren: () =>
      import("./pages/intro/intro.module").then((m) => m.IntroPageModule),
  },
  {
    path: allRoutes.videoCall,
    loadChildren: () =>
      import("./pages/video-call/video-call.module").then(
        (m) => m.VideoCallPageModule
      ),
  },
  // {
  //   path: allRoutes.guide,
  //   loadChildren: () =>
  //     import("./pages/guide/guide.module").then(m => m.GuidePageModule)
  // },
  // {
  //   path: allRoutes.tabs,
  //   loadChildren: () =>
  //     import("./pages/tabs/tabs.module").then(m => m.TabsPageModule)
  // },
  // {
  //   path: allRoutes.settings,
  //   loadChildren: () =>
  //     import("./pages/settings/settings.module").then(m => m.SettingsPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
