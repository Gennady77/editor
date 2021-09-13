import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RendererModule } from "./feature/renderer/renderer.module";
import { CoreModule } from "./core/core.module";
import { RouterModule } from "@angular/router";
import { AppRouting } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RendererModule,
    CoreModule,
    RouterModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
