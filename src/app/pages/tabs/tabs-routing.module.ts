import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { allRoutes } from 'src/app/models/common-models';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: allRoutes.home,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../intro/intro.module').then(m => m.IntroPageModule)
          }
        ]
      },
      {
        path: allRoutes.favorites,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../favorites/favorites.module').then(m => m.FavoritesPageModule)
          }
        ]
      },
      {
        path: allRoutes.profile,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
