import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { IntroPageRoutingModule } from "./intro-routing.module";

import { IntroPage } from "./intro.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    IntroPageRoutingModule,
  ],
  declarations: [IntroPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IntroPageModule {}
