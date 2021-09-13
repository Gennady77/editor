import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorElementButtonsControl } from "./control/element-buttons/element-buttons.control";
import { RendererModule } from "../renderer/renderer.module";
import { AppEditorComponent } from "./root/editor.component";
import { AppEditorConfig } from "./editor.constants";



@NgModule({
  declarations: [
    AppEditorComponent,
    EditorElementButtonsControl
  ],
  imports: [
    CommonModule,
    RendererModule,
  ],
  exports: [
    AppEditorComponent
  ]
})
export class AppEditorModule {
  static forRoot(config: AppEditorConfig = {}): ModuleWithProviders<any> {
    return {
      ngModule: AppEditorModule,
      providers: []
    };
  }
}
