import { Component } from '@angular/core';
import { allRoutes } from 'src/app/models/common-models';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tabs =  [
    {
      route: allRoutes.home,
      title: 'Anasayfa',
      icon: 'home'
    },
    {
      route: allRoutes.favorites,
      title: 'Favoriler',
      icon: 'heart'
    },
    {
      route: allRoutes.profile,
      title: 'Profil',
      icon: 'person'
    }
  ];
  constructor() {}

}
