import { Component, ComponentFactoryResolver, ComponentRef, Injector, Type } from "@angular/core";
import { AbstractComponent } from "../misc/abstract.component";
import { AbstractEditor, PageSnapshot } from "./abstract-editor";
import { AppElementType } from "../../../core/models/element";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html'
})
export class AppEditorComponent extends AbstractComponent implements AbstractEditor {
  pageSnapshot: PageSnapshot = {
    template: {
      id: 'app_template_1',
      type: AppElementType.Document
    }
  };

  constructor(
    public injector: Injector,
    public cfr: ComponentFactoryResolver
  ) {
    super();
  }


  createControl<T>(controlClass: Type<T>): ComponentRef<T> {
    const injector = Injector.create({
      name: 'Controls Injector',
      parent: this.injector,
      providers: [
        { provide: AbstractEditor, useValue: this },
      ]
    });

    return this.cfr
      .resolveComponentFactory(controlClass)
      .create(injector);
  }
}
