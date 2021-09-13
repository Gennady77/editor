import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HelloComponent } from "./core/component/hello/hello.component";
import { SandboxEditorModule } from "./+editor/editor.module";

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HelloComponent
}, {
  path: 'editor',
  loadChildren: () => import('./+editor/editor.module').then(
    m => m.SandboxEditorModule
  )
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {}
