import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SandboxRootComponent } from "./root/root.component";
import { RouterModule, Routes } from "@angular/router";
import { AppEditorModule } from "../feature/editor/editor.module";

const routes: Routes = [{
  path: '',
  component: SandboxRootComponent
}];

@NgModule({
  declarations: [
    SandboxRootComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AppEditorModule.forRoot({})
  ]
})
export class SandboxEditorModule {

}
